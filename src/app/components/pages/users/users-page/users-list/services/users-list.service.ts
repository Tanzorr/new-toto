import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteUser, getUsers } from '../../../../../../store/users/users-actions';
import { usersSelector } from '../../../../../../store/users/users-selectors';
import { UsersState } from '../../../../../../store/users/users-reducers';
import { QueryParams } from '../../../../../../models/query-params';

@Injectable({
  providedIn: 'root',
})
export class UsersListService {
  paginatedUsersResponse$ = this.store.select(usersSelector);

  constructor(private store: Store<UsersState>) {}

  getUsers(queryParams?: QueryParams): void {
    this.store.dispatch(getUsers({ queryParams }));
  }

  deleteUser(id: string): void {
    this.store.dispatch(deleteUser({ id }));
  }
}
