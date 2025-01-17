import { AuthService } from '../../services/api/auth.service';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFail, loginSuccess, logoutFail, logoutSuccess, logout } from './auth-actions';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { ServerError } from '../../models/server-error';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../models/login-response';
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { Store } from '@ngrx/store';
import { UsersState } from '../users/users-reducers';

@Injectable()
export class AuthEffects {
  login = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) => {
        return this.authService.login(action.value).pipe(
          map((loginResponse: LoginResponse) => {
            this.spinnerLoaderService.show();
            if (loginResponse.loggedUser) {
              this.localStorage.set('access_token', loginResponse.authToken);
              this.localStorage.set('logged_user', JSON.stringify(loginResponse.loggedUser));
              if (this.localStorage.get('access_token')) {
                this.router.navigate(['/users']).then((r) => {
                  //location.reload();
                });
              }
            } else {
              // @ts-ignore
              this.serverErrorDisplayService.displayError(loginResponse.original.message);
            }

            return loginSuccess({ value: loginResponse });
          }),
          catchError((error: ServerError) => {
            this.serverErrorDisplayService.displayError(error.message);
            return of(loginFail({ error: error.message }));
          }),
          finalize(() => {
            this.spinnerLoaderService.hide();
          })
        );
      })
    )
  );

  logout = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      switchMap(() => {
        this.spinnerLoaderService.show();
        return this.authService.logout().pipe(
          map(() => {
            this.localStorage.delete('access_token');
            this.router.navigate(['/login']).then((r) => {
              window.location.reload();
            });
            return logoutSuccess({ message: 'Logout successful' });
          }),
          catchError((error: ServerError) => {
            this.serverErrorDisplayService.displayError(error.message);
            return of(logoutFail({ error: error.message }));
          }),
          finalize(() => {
            this.spinnerLoaderService.hide();
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService,
    private localStorage: LocalStorageService
  ) {}
}
