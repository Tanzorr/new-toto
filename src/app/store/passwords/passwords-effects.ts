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
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { PasswordService } from '../../services/api/password.service';
import { Password } from '../../models/password';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServerError } from '../../models/server-error';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';

@Injectable()
export class PasswordsEffects {
  getPassword$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getPassword),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.passwordsApiService.getPassword(action.id).pipe(
            map((passwordData: Password) => {
              return getPasswordSuccess({ value: passwordData });
            }),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(getPasswordFailure({ value: error.message }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
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
          this.spinnerLoaderService.show();
          return this.passwordsApiService.updatePassword(action.value).pipe(
            map((passwordData: Password) => {
              return updatePasswordSuccess({ value: passwordData });
            }),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(updatePasswordFailure({ value: error.message }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
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
          this.spinnerLoaderService.show();
          console.log('add password', action.value);
          return this.passwordsApiService.addPassword(action.value).pipe(
            map(() => {
              return addPasswordSuccess({ value: action.value });
            }),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(addPasswordFailure({ value: error.message }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
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
          return this.passwordsApiService.deletePassword(action.id).pipe(
            map(() => {
              return deletePasswordSuccess({ id: action.id });
            }),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(deletePasswordFailure({ value: error.message }));
            })
          );
        })
      ),
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private passwordsApiService: PasswordService,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService
  ) {}
}
