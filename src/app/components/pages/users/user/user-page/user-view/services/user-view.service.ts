import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { userSelector } from '../../../../../../../store/users/users-selectors';
import { getUser } from '../../../../../../../store/users/users-actions';
import { UsersState } from '../../../../../../../store/users/users-reducers';

@Injectable({
  providedIn: 'root',
})
export class UserViewService {
  user$ = this.store.select(userSelector);
  constructor(private store: Store<UsersState>) {}

  getUser(): void {
    this.store.dispatch(getUser());
  }
}
