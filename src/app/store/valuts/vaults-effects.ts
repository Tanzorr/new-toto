import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  deleteVault,
  deleteVaultFailure,
  deleteVaultSuccess,
  getVault,
  getVaults,
  getVaultsFailure,
  getVaultsSuccess,
  getVaultSuccess,
} from './vaults-actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { VaultsService } from '../../services/api/vaults.service';
import { PaginatedVaultsResponse, Vault } from '../../models/vault';
import { Store } from '@ngrx/store';
import { PasswordState } from '../passwords/passwords-reducers';
import { getPasswordsSuccess } from '../passwords/passwords-actions';

@Injectable()
export class VaultsEffects {
  getVaults$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getVaults),
        switchMap(() => {
          return this.vaultsApiService.getVaults().pipe(
            map((vaultsData: PaginatedVaultsResponse) => {
              return getVaultsSuccess({ value: vaultsData });
            }),
            catchError((error: any) => {
              return of(getVaultsFailure({ value: error }));
            })
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
          return this.vaultsApiService.getVault(action.id).pipe(
            map((vaultData: Vault) => {
              this.passwordStore.dispatch(getPasswordsSuccess({ passwords: vaultData.passwords }));
              return getVaultSuccess({ value: vaultData });
            }),
            catchError((error: any) => {
              return of(getVaultsFailure({ value: error }));
            })
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
          // @ts-ignore
          return this.vaultsApiService.deleteVault(action.id).pipe(
            map(() => {
              return deleteVaultSuccess({ id: action.id });
            }),
            catchError((error: any) => {
              return of(deleteVaultFailure({ value: error }));
            })
          );
        })
      ),
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private vaultsApiService: VaultsService,
    private passwordStore: Store<PasswordState>
  ) {}
}
