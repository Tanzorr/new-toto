import { Injectable } from '@angular/core';
import {
  addUser,
  addUserFail,
  addUserSuccess,
  deleteUser,
  deleteUserFail,
  deleteUserSuccess,
  getUser,
  getUserFail,
  getUsers,
  getUsersSuccess,
  getUserSuccess,
  updateUser,
  updateUserFail,
  updateUserSuccess,
} from './users-actions';
import { catchError, finalize, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CreateUserResponse, User } from '../../models/user';
import { UsersService } from '../../services/api/users.service';
import { usersSelector } from './users-selectors';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { routerSelector } from '../router/router-selector';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { PaginatedUsersResponse } from '../../models/paginate-users-response';
import { UsersState } from './users-reducers';
import { ServerError } from '../../models/server-error';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';

@Injectable()
export class UsersEffects {
  getUsers = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getUsers),
        withLatestFrom(this.store.select(usersSelector)),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.usersApiService.getUsers(action[0].url).pipe(
            map((usersData: PaginatedUsersResponse) => {
              this.spinnerLoaderService.hide();
              this.store.dispatch(getUsersSuccess({ value: usersData }));
            }),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(addUserFail({ value: error.message }));
            }),
            finalize(() => {
              this.spinnerLoaderService.hide();
            })
          );
        })
      ),
    {
      dispatch: false,
    }
  );

  addUser = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      switchMap((action) => {
        return this.usersApiService.addUser(action.value).pipe(
          map((userResponse: CreateUserResponse) => {
            this.router.navigate(['/users']).then((r) => console.log('Navigate:', r));
            return addUserSuccess({ value: userResponse.user });
          }),
          catchError((error: ServerError) => {
            this.serverErrorDisplayService.displayError(error.message);
            return of(addUserFail({ value: error.message }));
          })
        );
      })
    )
  );

  getUser = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      withLatestFrom(this.store.select(routerSelector)),
      switchMap(([action, route]) => {
        this.spinnerLoaderService.show();
        return this.usersApiService.getUser(route.state.params['id']).pipe(
          map((user: User) => getUserSuccess({ value: user })),
          catchError((error: ServerError) => {
            this.serverErrorDisplayService.displayError(error.message);
            return of(getUserFail({ value: error.message }));
          }),
          finalize(() => this.spinnerLoaderService.hide())
        );
      })
    )
  );

  updateUser = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      switchMap((action) => {
        this.spinnerLoaderService.show();
        return this.usersApiService.updateUser(action.value).pipe(
          map((user: User) => {
            this.router.navigate(['/users']).then((r) => console.log('Navigate:', r));
            return updateUserSuccess({ value: user });
          }),
          catchError((error: ServerError) => {
            this.serverErrorDisplayService.displayError(error.message);
            return of(updateUserFail({ value: error.message }));
          }),
          finalize(() => this.spinnerLoaderService.hide())
        );
      })
    )
  );

  deleteUser = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteUser),
        switchMap((action) => {
          return this.usersApiService.deleteUser(action.id).pipe(
            map(() => deleteUserSuccess({ value: action.id })),
            catchError((error: ServerError) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(deleteUserFail({ value: error.message }));
            })
          );
        })
      ),
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private store: Store<UsersState>,
    private router: Router,
    private usersApiService: UsersService,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService
  ) {}
}
