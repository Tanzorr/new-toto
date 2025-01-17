import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../services/api/auth.service';
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';

import {
  login,
  loginFail,
  loginSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
} from './auth-actions';
import { LoginResponse } from '../../models/login-response';
import { ServerError } from '../../models/server-error';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      tap(() => this.spinnerLoaderService.show()), // Показати лоадер перед початком
      switchMap(({ value }) =>
        this.authService.login(value).pipe(
          map((response: LoginResponse) => {
            if (response.loggedUser) {
              this.handleLoginSuccess(response);
              return loginSuccess({ value: response });
            } else {
              this.serverErrorDisplayService.displayError('Invalid credentials');
              return loginFail({ error: 'Invalid credentials' });
            }
          }),
          catchError((error: ServerError) => {
            this.serverErrorDisplayService.displayError(error.message);
            return of(loginFail({ error: error.message }));
          }),
          finalize(() => this.spinnerLoaderService.hide()) // Приховати лоадер у будь-якому випадку
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => this.spinnerLoaderService.show()),
      switchMap(() =>
        this.authService.logout().pipe(
          map(() => {
            this.handleLogoutSuccess();
            return logoutSuccess({ message: 'Logout successful' });
          }),
          catchError((error: ServerError) => {
            this.serverErrorDisplayService.displayError(error.message);
            return of(logoutFailure({ error: error.message }));
          }),
          finalize(() => this.spinnerLoaderService.hide())
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorage: LocalStorageService,
    private router: Router,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService
  ) {}

  private handleLoginSuccess(response: LoginResponse): void {
    this.localStorage.set('access_token', response.authToken);
    this.localStorage.set('logged_user', JSON.stringify(response.loggedUser));
    this.router.navigate(['/users']).then(() => {
      console.log('Navigation to /users completed');
    });
  }

  private handleLogoutSuccess(): void {
    this.localStorage.delete('access_token');
    this.router.navigate(['/login']).then(() => {});
  }
}
