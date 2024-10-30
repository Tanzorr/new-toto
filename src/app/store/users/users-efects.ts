import {Injectable} from "@angular/core";
import {
  addUser, addUserFail,
  addUserSuccess,
  deleteUser,
  deleteUserFail, deleteUserSuccess,
  getUsers,
  getUsersFail,
  getUsersSuccess,
  getUser,
  getUserSuccess,
  getUserFail, updateUser, updateUserSuccess, updateUserFail,

} from "./users-actions";
import {catchError, switchMap, tap, withLatestFrom, map} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {User, PaginatedUsersResponse, CreateUserResponse} from "../../models/entities/User";
import {UserService} from "../../services/api/user/user.service";
import {usersSelector} from "./users-selectors";
import {ActivatedRoute, Router} from "@angular/router";
import {of} from "rxjs";
import {routerSelector} from "../router/router-selector";

@Injectable()
export class UsersEffects {
  private _userId: string;

  getUsers = createEffect(
    () =>
      this._actions$.pipe(
        ofType(getUsers),
        withLatestFrom(this._store.select(usersSelector)),
        switchMap((action) => {
          return this._usersApiService.getUsers(action[0].url).pipe(
            tap((usersData: PaginatedUsersResponse) => {
              this._store.dispatch(getUsersSuccess({value: usersData}));
              catchError((error) => {
                this._store.dispatch(getUsersFail({value: error}));
                return error;
              });
            })
          );
        })
      ),
    {
      dispatch: false,
    }
  );

  addUser = createEffect(() =>
    this._actions$.pipe(
      ofType(addUser),
      switchMap((action) => {
        return this._usersApiService.addUser(action.value).pipe(
          map((userResponse: CreateUserResponse) => {
            this._router.navigate(['/users']).then(r => console.log('Navigate:', r));
            return addUserSuccess({value: userResponse.user});
          }),
          catchError((error) => {
            return of(addUserFail({value: error}));
          })
        );
      })
    )
  );

  getUser = createEffect(() =>
    this._actions$.pipe(
      ofType(getUser),
      withLatestFrom(this._store.select(routerSelector)),
      switchMap(([action, route]) => {
        return this._usersApiService.getUser(route.state.params['id']).pipe(
          switchMap((user: User) => [getUserSuccess({value: user})]),
          catchError((error) => [getUserFail({value: error})])
        );
      })
    )
  );

  updateUser = createEffect(() =>
    this._actions$.pipe(
      ofType(updateUser),
      switchMap((action) => {
        return this._usersApiService.updateUser(action.value).pipe(
          map((user: User) => {
            return updateUserSuccess({ value: user });
          }),
          catchError((error) => of(updateUserFail({ value: error })))
        );
      })
    )
  );
  deleteUser = createEffect(() =>
    this._actions$.pipe(
      ofType(deleteUser),
      switchMap((action) => {
        return this._usersApiService.deleteUser(action.id).pipe(
          switchMap(() => [deleteUserSuccess({value: action.id})]),
          catchError((error) => [deleteUserFail({value: error})])
        );
      })
    )
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<{ users: User[] }>,
    private _router: Router,
    private _usersApiService: UserService,
    private _route: ActivatedRoute
  ) {
    this._userId = this._route.snapshot.params['id'];
  }
}
