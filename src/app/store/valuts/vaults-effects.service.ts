import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getVault,
  getVaults,
  getVaultsFailure,
  getVaultsSuccess,
  getVaultSuccess,
} from './vaults-actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Vault } from '../../models/vault';
import { VaultsService } from '../../services/api/vaults.service';

@Injectable()
export class VaultsEffects {
  getVaults$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getVaults),
        switchMap(() => {
          return this.vaultsApiService.getVaults().pipe(
            map((vaultsData: any) => {
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
            map((vaultData: any) => {
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

  constructor(
    private actions$: Actions,
    private vaultsApiService: VaultsService
  ) {}
}
