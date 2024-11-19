import { Injectable } from '@angular/core';
import { User } from '../../../../../../../models/user';
import { Store } from '@ngrx/store';
import { addUser } from '../../../../../../../store/users/users-actions';
import { UsersState } from '../../../../../../../store/users/users-reducers';

@Injectable({
  providedIn: 'root',
})
export class UserCreateService {
  constructor(private _store: Store<UsersState>) {}

  addUser(user: User): void {
    this._store.dispatch(addUser({ value: user }));
  }
}
