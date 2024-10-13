import { Injectable } from '@angular/core';
import {User, UserCreateData} from "../../../../../../../models/entities/User";
import {Store} from "@ngrx/store";
import {addUser} from "../../../../../../../store/users/users-actions";

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {


  constructor(private _store: Store<{user: User}>) { }


  addUser(user: UserCreateData): void {
    this._store.dispatch(addUser({value: user}));
  }
}
