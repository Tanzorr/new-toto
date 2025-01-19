import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VaultsService } from '../../services/api/vaults.service';
import { Store } from '@ngrx/store';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerError } from '../../models/server-error';
import { Observable, catchError, of, switchMap, map } from 'rxjs';
import { finalize, withLatestFrom } from 'rxjs/operators';
import {
  addVault,
  addVaultSuccess,
  deleteVault,
  deleteVaultSuccess,
  getVault,
  getVaults,
  getVaultsSuccess,
  getVaultSuccess,
  updateVault,
  updateVaultSuccess,
} from './vaults-actions';
import { PaginatedVaultsResponse, Vault } from '../../models/vault';
import { routerSelector } from '../router/router-selector';
import { getPasswordsSuccess } from '../passwords/passwords-actions';
import {
  getAccessedUsersSuccess,
  getSharedAccessSuccesses,
} from '../shared-access/shared-access-actions';

@Injectable()
export class VaultsEffects {
  constructor(
    private actions$: Actions,
    private vaultsApiService: VaultsService,
    private store: Store,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService
  ) {}

  private showSpinner = () => this.spinnerLoaderService.show();
  private hideSpinner = () => this.spinnerLoaderService.hide();

  private handleError = (error: ServerError, actionFail: any) => {
    this.serverErrorDisplayService.displayError(error.message);
    return of(actionFail({ error: error.message }));
  };

  private handleErrors = (observable: Observable<any>, actionFail: any) => {
    return observable.pipe(
      catchError((error: ServerError) => this.handleError(error, actionFail)),
      finalize(this.hideSpinner)
    );
  };

  getVaults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVaults),
      switchMap((action) => {
        this.showSpinner();
        return this.handleErrors(
          this.vaultsApiService
            .getVaults(action.queryParams)
            .pipe(
              map((vaultsData: PaginatedVaultsResponse) =>
                getVaultsSuccess({ paginatedVaults: vaultsData })
              )
            ),
          getVaultsSuccess
        );
      })
    )
  );

  addVault$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addVault),
      switchMap((action) => {
        this.showSpinner();
        return this.handleErrors(
          this.vaultsApiService.addVault(action.vaultData).pipe(
            map(() => {
              this.store.dispatch(getVaults({}));
              return addVaultSuccess();
            })
          ),
          addVaultSuccess
        );
      })
    )
  );

  getVault$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVault),
      withLatestFrom(this.store.select(routerSelector)),
      switchMap(([action]) => {
        this.showSpinner();
        return this.handleErrors(
          this.vaultsApiService.getVault(action.id).pipe(
            map((vaultData: Vault) => {
              this.store.dispatch(getPasswordsSuccess({ passwords: vaultData.passwords }));
              this.store.dispatch(getAccessedUsersSuccess({ users: vaultData.accessed_users }));
              this.store.dispatch(
                getSharedAccessSuccesses({ sharedAccesses: vaultData.shared_access })
              );
              return getVaultSuccess({ vault: vaultData });
            })
          ),
          getVaultSuccess
        );
      })
    )
  );

  updateVault$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateVault),
      switchMap((action) =>
        this.vaultsApiService
          .updateVault(action.vault)
          .pipe(map(() => updateVaultSuccess({ updatedVault: action.vault })))
      )
    )
  );

  deleteVault$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteVault),
      switchMap((action) => {
        this.showSpinner();
        return this.handleErrors(
          this.vaultsApiService.deleteVault(action.id).pipe(
            map(() => deleteVaultSuccess({ deletedVaultId: action.id })),
            catchError((error) => this.handleError(error, deleteVault))
          ),
          deleteVault
        );
      })
    )
  );
}
