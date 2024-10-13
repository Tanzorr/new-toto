import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {userSelector} from "../../../../../../../store/users/users-selectors";
import {getUser} from "../../../../../../../store/users/users-actions";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$ = this._store.select(userSelector);
  constructor(private _store: Store) { }

  getUser(): void {
    this._store.dispatch(getUser());
  }
}
