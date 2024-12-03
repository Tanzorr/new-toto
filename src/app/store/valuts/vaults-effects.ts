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
} from './vaults-actions';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { VaultsService } from '../../services/api/vaults.service';
import { PaginatedVaultsResponse, Vault } from '../../models/vault';
import { Store } from '@ngrx/store';
import { PasswordState } from '../passwords/passwords-reducers';
import { getPasswordsSuccess } from '../passwords/passwords-actions';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { ServerError } from '../../models/server-error';

@Injectable()
export class VaultsEffects {
  getVaults$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getVaults),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.vaultsApiService.getVaults(action.queryParams).pipe(
            map((vaultsData: PaginatedVaultsResponse) => getVaultsSuccess({ value: vaultsData })),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(getVaultsFailure({ value: error }));
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
          return this.vaultsApiService.addVault(action.value).pipe(
            map(() => addVaultSuccess({ value: action.value })),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(addVaultFailure({ value: error }));
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
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.vaultsApiService.getVault(action.id).pipe(
            map((vaultData: Vault) => {
              this.passwordStore.dispatch(getPasswordsSuccess({ passwords: vaultData.passwords }));
              return getVaultSuccess({ value: vaultData });
            }),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(getVaultsFailure({ value: error }));
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
          return this.vaultsApiService.updateVault(action.value).pipe(
            map(() => addVaultSuccess({ value: action.value })),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(addVaultFailure({ value: error.message }));
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
            map(() => deleteVaultSuccess({ id: action.id })),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(deleteVaultFailure({ value: error.message }));
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
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService
  ) {}
}
