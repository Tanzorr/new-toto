import { Injectable } from '@angular/core';
import { userSelector } from '../../../../../../../store/users/users-selectors';
import { Store } from '@ngrx/store';
import { getUser, updateUser } from '../../../../../../../store/users/users-actions';
import { User } from '../../../../../../../models/user';
import { UsersState } from '../../../../../../../store/users/users-reducers';

@Injectable({
  providedIn: 'root',
})
export class EditUserService {
  user$ = this.store.select(userSelector);

  constructor(private store: Store<UsersState>) {}

  getUser(): void {
    this.store.dispatch(getUser());
  }

  updateUser(user: User): void {
    this.store.dispatch(updateUser({ value: user }));
  }
}
