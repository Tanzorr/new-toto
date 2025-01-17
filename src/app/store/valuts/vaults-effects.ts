import { Injectable } from '@angular/core';
import { ServerError } from 'src/app/models/server-error';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
import { VaultsService } from '../../services/api/vaults.service';
import { PasswordState } from '../passwords/passwords-reducers';
import { Store } from '@ngrx/store';
import { SharedAccessState } from '../shared-access/shared-access-reducers';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { VaultsState } from './vaults-reducers';

@Injectable()
export class VaultsEffects {
  private handleError = (error: ServerError) => {
    this.serverErrorDisplayService.displayError(error.message);
    return of({ type: '[Vaults] Error', error: error.message });
  };

  private showSpinnerAndHandleErrors = (observable: Observable<any>) => {
    this.spinnerLoaderService.show();
    return observable.pipe(
      catchError(this.handleError),
      finalize(() => this.spinnerLoaderService.hide())
    );
  };

  getVaults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVaults),
      switchMap((action) =>
        this.showSpinnerAndHandleErrors(
          this.vaultsApiService
            .getVaults(action.queryParams)
            .pipe(
              map((vaultsData: PaginatedVaultsResponse) =>
                getVaultsSuccess({ paginatedVaults: vaultsData })
              )
            )
        )
      )
    )
  );

  addVault$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addVault),
      switchMap((action) =>
        this.showSpinnerAndHandleErrors(
          this.vaultsApiService.addVault(action.vaultData).pipe(
            map(() => {
              this.store.dispatch(getVaults({}));
              return addVaultSuccess();
            })
          )
        )
      )
    )
  );

  getVault$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVault),
      withLatestFrom(this.store.select(routerSelector)),
      switchMap(([action, route]) =>
        this.showSpinnerAndHandleErrors(
          this.vaultsApiService.getVault(action.id).pipe(
            map((vaultData: Vault) => {
              this.passwordStore.dispatch(getPasswordsSuccess({ passwords: vaultData.passwords }));
              this.sharedAccessStore.dispatch(
                getAccessedUsersSuccess({ value: vaultData.accessed_users })
              );
              this.sharedAccessStore.dispatch(
                getSharedAccessSuccesses({ value: vaultData.shared_access })
              );
              return getVaultSuccess({ vault: vaultData });
            })
          )
        )
      )
    )
  );

  updateVault$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateVault),
      switchMap((action) =>
        this.showSpinnerAndHandleErrors(
          this.vaultsApiService
            .updateVault(action.vault)
            .pipe(map(() => updateVaultSuccess({ updatedVault: action.vault })))
        )
      )
    )
  );

  deleteVault$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteVault),
      switchMap((action) =>
        this.vaultsApiService.deleteVault(action.id).pipe(
          map(() => deleteVaultSuccess({ deletedVaultId: action.id })),
          catchError((error) => this.handleError(error))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private vaultsApiService: VaultsService,
    private passwordStore: Store<PasswordState>,
    private sharedAccessStore: Store<SharedAccessState>,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService,
    private store: Store<VaultsState>
  ) {}
}
