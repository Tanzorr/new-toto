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
  getUsersFail,
  getUsersSuccess,
  getUserSuccess,
  updateUser,
  updateUserFail,
  updateUserSuccess,
} from './users-actions';
import { catchError, map, switchMap, finalize, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CreateUserResponse, User } from '../../models/user';
import { UsersService } from '../../services/api/users.service';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { PaginatedUsersResponse } from '../../models/paginate-users-response';
import { UsersState } from './users-reducers';
import { ServerError } from '../../models/server-error';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { routerSelector } from '../router/router-selector';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private store: Store<UsersState>,
    private router: Router,
    private usersApiService: UsersService,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService
  ) {}

  private showSpinner = () => this.spinnerLoaderService.show();
  private hideSpinner = () => this.spinnerLoaderService.hide();

  private handleError = (error: ServerError, actionFail: any) => {
    this.serverErrorDisplayService.displayError(error.message);
    return of(actionFail({ error: error.message }));
  };

  getUsers = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap((action) => {
        this.showSpinner();
        return this.usersApiService.getUsers(action.queryParams).pipe(
          map((usersData: PaginatedUsersResponse) => getUsersSuccess({ users: usersData })),
          catchError((error: ServerError) => this.handleError(error, getUsersFail)),
          finalize(this.hideSpinner)
        );
      })
    )
  );

  addUser = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      switchMap((action) => {
        this.showSpinner();
        return this.usersApiService.addUser(action.user).pipe(
          map((response: CreateUserResponse) => {
            this.navigateTo('/users');
            return addUserSuccess({ user: response.user });
          }),
          catchError((error: ServerError) => this.handleError(error, addUserFail)),
          finalize(this.hideSpinner)
        );
      })
    )
  );

  getUser = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      withLatestFrom(this.store.select(routerSelector)),
      switchMap(([action, route]) => {
        this.showSpinner();
        return this.usersApiService.getUser(route.state.params['id']).pipe(
          map((user: User) => getUserSuccess({ user })),
          catchError((error: ServerError) => this.handleError(error, getUserFail)),
          finalize(this.hideSpinner)
        );
      })
    )
  );

  updateUser = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      switchMap((action) => {
        this.showSpinner();
        return this.usersApiService.updateUser(action.user).pipe(
          map((user: User) => {
            this.navigateTo('/users');
            return updateUserSuccess({ user });
          }),
          catchError((error: ServerError) => this.handleError(error, updateUserFail)),
          finalize(this.hideSpinner)
        );
      })
    )
  );

  deleteUser = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      switchMap((action) => {
        this.showSpinner();
        return this.usersApiService.deleteUser(action.id).pipe(
          map(() => deleteUserSuccess({ id: action.id })),
          catchError((error: ServerError) => this.handleError(error, deleteUserFail)),
          finalize(this.hideSpinner)
        );
      })
    )
  );

  private navigateTo(path: string) {
    this.router.navigate([path]).then((success) => {
      if (!success) {
        console.error(`Navigation to ${path} failed`);
      }
    });
  }
}
