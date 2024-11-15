import { Injectable } from '@angular/core';
import {userSelector} from "../../../../../../../store/users/users-selectors";
import {Store} from "@ngrx/store";
import {getUser, updateUser} from "../../../../../../../store/users/users-actions";
import {User} from "../../../../../../../models/entities/User";

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  user$ = this._store.select(userSelector);
  constructor(private _store: Store) { }
  getUser(): void {
    this._store.dispatch(getUser());
  }

  updateUser(user: User): void {
    this._store.dispatch(updateUser({value: user}));
  }
}
