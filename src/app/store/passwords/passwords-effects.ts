import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
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
import { PasswordService } from '../../services/api/password.service';
import { Password } from '../../models/password';
import { ServerError } from '../../models/server-error';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';

@Injectable()
export class PasswordsEffects {
  constructor(
    private actions$: Actions,
    private passwordsApiService: PasswordService,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService
  ) {}

  private handleApiCall<T>(
    apiCall: () => Observable<T>,
    successAction: (payload: T) => unknown,
    failureAction: (error: string) => unknown
  ): Observable<any> {
    this.spinnerLoaderService.show();
    return apiCall().pipe(
      map(successAction),
      catchError((error: ServerError) => {
        this.serverErrorDisplayService.displayError(error.message);
        return of(failureAction(error.message));
      }),
      finalize(() => this.spinnerLoaderService.hide())
    );
  }

  getPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPassword),
      switchMap((action) =>
        this.handleApiCall(
          () => this.passwordsApiService.getPassword(action.id),
          (password: Password) => getPasswordSuccess({ password }),
          (error: string) => getPasswordFailure({ error })
        )
      )
    )
  );

  updatePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePassword),
      switchMap((action) =>
        this.handleApiCall(
          () => this.passwordsApiService.updatePassword(action.password),
          (password: Password) => updatePasswordSuccess({ password: action.password }),
          (error: string) => updatePasswordFailure({ error })
        )
      )
    )
  );

  addPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPassword),
      switchMap((action) =>
        this.handleApiCall(
          () => this.passwordsApiService.addPassword(action.createPassword),
          (password: Password) => addPasswordSuccess({ password }),
          (error: string) => addPasswordFailure({ error })
        )
      )
    )
  );

  deletePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePassword),
      switchMap((action) =>
        this.handleApiCall(
          () => this.passwordsApiService.deletePassword(action.id),
          () => deletePasswordSuccess({ id: action.id }),
          (error: string) => deletePasswordFailure({ error })
        )
      )
    )
  );
}
