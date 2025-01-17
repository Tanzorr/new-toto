import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addVault,
  addVaultFailure,
  addVaultSuccess,
  deleteVault,
  deleteVaultFailure,
  deleteVaultSuccess,
  getVault,
  getVaults,
  getVaultsFailure,
  getVaultsSuccess,
  getVaultSuccess,
  updateVault,
  updateVaultSuccess,
} from './vaults-actions';
import { catchError, finalize, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { VaultsService } from '../../services/api/vaults.service';
import { PaginatedVaultsResponse, Vault } from '../../models/vault';
import { Store } from '@ngrx/store';
import { PasswordState } from '../passwords/passwords-reducers';
import { getPasswordsSuccess } from '../passwords/passwords-actions';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { ServerError } from '../../models/server-error';
import { routerSelector } from '../router/router-selector';
import { VaultsState } from './vaults-reducers';
import {
  getAccessedUsersSuccess,
  getSharedAccessSuccesses,
} from '../shared-access/shared-access-actions';
import { SharedAccessState } from '../shared-access/shared-access-reducers';

@Injectable()
export class VaultsEffects {
  getVaults$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getVaults),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.vaultsApiService.getVaults(action.queryParams).pipe(
            map((vaultsData: PaginatedVaultsResponse) =>
              getVaultsSuccess({ paginatedVaults: vaultsData })
            ),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(getVaultsFailure({ error }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
          );
        })
      ),
    { dispatch: true }
  );

  addVault$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addVault),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.vaultsApiService.addVault(action.vaultData).pipe(
            map(() => {
              this.store.dispatch(getVaults({}));
              return addVaultSuccess();
            }),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.error.message);
              return of(addVaultFailure({ error }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
          );
        })
      ),
    { dispatch: true }
  );

  getVault$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getVault),
        withLatestFrom(this.store.select(routerSelector)),
        switchMap(([action, route]) => {
          this.spinnerLoaderService.show();
          return this.vaultsApiService.getVault(action.id).pipe(
            map((vaultData: Vault) => {
              this.passwordStore.dispatch(getPasswordsSuccess({ passwords: vaultData.passwords }));
              this.sharedAccessStore.dispatch(
                getAccessedUsersSuccess({ value: vaultData.accessed_users })
              );
              this.sharedAccessStore.dispatch(
                getSharedAccessSuccesses({ value: vaultData.shared_access })
              );
              return getVaultSuccess({ vault: vaultData });
            }),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(getVaultsFailure({ error }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
          );
        })
      ),
    { dispatch: true }
  );

  updateVault$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateVault),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.vaultsApiService.updateVault(action.vault).pipe(
            map(() => updateVaultSuccess({ updatedVault: action.vault })),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(addVaultFailure({ error: error.message }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
          );
        })
      ),
    { dispatch: true }
  );

  deleteVault$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteVault),
        switchMap((action) => {
          return this.vaultsApiService.deleteVault(action.id).pipe(
            map(() => deleteVaultSuccess({ deletedVaultId: action.id })),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(deleteVaultFailure({ error: error.message }));
            })
          );
        })
      ),
    { dispatch: true }
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
