import {Injectable} from "@angular/core";
import {getUsers, getUsersFail, getUsersSuccess} from "./users-actions";
import {catchError, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {User} from "../../models/entities/User";
import {UserService} from "../../services/api/user/user.service";
import {usersSelector} from "./users-selectors";

@Injectable()
export class UsersEffects {
  getUsers = createEffect(
    () =>
      this._actions$.pipe(
        ofType(getUsers),
        withLatestFrom(this._store.select(usersSelector)),
        switchMap(() => {
          return this._usersApiService.getUsers().pipe(
            tap((users: User[]) => {
              this._store.dispatch(getUsersSuccess({ value: users }));
              catchError((error) => {
                this._store.dispatch(getUsersFail({ value: error }));
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

  constructor(
    private _actions$: Actions,
    private _store: Store<{ users: User[] }>,
    private _usersApiService: UserService
  ) {
  }

}
