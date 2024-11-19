import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteUser, getUsers } from '../../../../../../store/users/users-actions';
import { usersSelector } from '../../../../../../store/users/users-selectors';
import { UsersState } from '../../../../../../store/users/users-reducers';

@Injectable({
  providedIn: 'root',
})
export class UsersListService {
  paginatedUsersResponse$ = this.store.select(usersSelector);

  constructor(private store: Store<UsersState>) {}

  getUsers(url?: string | null): void {
    this.store.dispatch(getUsers({ url }));
  }

  deleteUser(id: number) {
    this.store.dispatch(deleteUser({ id }));
  }
}
