import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {getUsers} from "../../../../../../store/users/users-actions";
import {usersSelector} from "../../../../../../store/users/users-selectors";

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  users$ = this._store.select(usersSelector);

  constructor(private _store: Store<{ users: []}>) { }

  getUsers(): void {
    this._store.dispatch(getUsers());
  }
}
