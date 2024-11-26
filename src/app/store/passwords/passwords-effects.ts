import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addPassword,
  addPasswordFailure,
  addPasswordSuccess,
  deletePassword,
  deletePasswordFailure,
  deletePasswordSuccess,
  getPassword,
  getPasswordFailure,
  getPasswordSuccess,
  updatePassword,
  updatePasswordFailure,
  updatePasswordSuccess,
} from './passwords-actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PasswordService } from '../../services/api/password.service';
import { Password } from '../../models/password';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PasswordsEffects {
  getPassword$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getPassword),
        switchMap((action) => {
          return this.passwordsService.getPassword(action.id).pipe(
            map((passwordData: Password) => {
              return getPasswordSuccess({ value: passwordData });
            }),
            catchError((error: any) => {
              return of(getPasswordFailure({ value: error }));
            })
          );
        })
      ),
    { dispatch: true }
  );

  updatePassword$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updatePassword),
        switchMap((action) => {
          return this.passwordsService.updatePassword(action.value).pipe(
            map((passwordData: Password) => {
              return updatePasswordSuccess({ value: passwordData });
            }),
            catchError((error: any) => {
              return of(updatePasswordFailure({ value: error }));
            })
          );
        })
      ),
    { dispatch: true }
  );

  addPassword$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addPassword),
        switchMap((action) => {
          return this.passwordsService.addPassword(action.value).pipe(
            map(() => {
              return addPasswordSuccess({ value: action.value });
            }),
            catchError((error: any) => {
              return of(addPasswordFailure({ value: error }));
            })
          );
        })
      ),
    { dispatch: true }
  );

  deletePassword$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deletePassword),
        switchMap((action) => {
          return this.passwordsService.deletePassword(action.id).pipe(
            map(() => {
              return deletePasswordSuccess({ id: action.id });
            }),
            catchError((error: any) => {
              return of(deletePasswordFailure({ value: error }));
            })
          );
        })
      ),
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private passwordsService: PasswordService
  ) {}
}
