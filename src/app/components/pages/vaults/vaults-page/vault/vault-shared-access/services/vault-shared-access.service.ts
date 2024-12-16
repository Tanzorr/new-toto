import { Injectable } from '@angular/core';
import { SharedAccessState } from '../../../../../../../store/shared-access/shared-access-reducers';
import { Store } from '@ngrx/store';
import {
  accessedUsersSelector,
  notAccessedUsersSelector,
} from '../../../../../../../store/shared-access/shared-access-selectors';
import {
  addSharedAccess,
  deleteSharedAccess,
  getAccessedUsers,
  getNotAccessedUsers,
} from '../../../../../../../store/shared-access/shared-access-actions';
import { QueryParams } from '../../../../../../../models/query-params';
import { VaultService } from '../../services/vault.service';
import { SharedAccess, SharedAccessData } from '../../../../../../../models/shared-access';
import { User } from '../../../../../../../models/user';

@Injectable({
  providedIn: 'root',
})
export class VaultSharedAccessService {
  notAccessedUsers$ = this.store.select(notAccessedUsersSelector);
  accessedUsers$ = this.store.select(accessedUsersSelector);

  vault$ = this.vaultService.vault$;
  constructor(
    private store: Store<SharedAccessState>,
    private vaultService: VaultService
  ) {}

  getNotAccessedUsers(id: number, params?: QueryParams): void {
    this.store.dispatch(getNotAccessedUsers({ id, params }));
  }

  getAccessedUsers(id: number): void {
    this.store.dispatch(getAccessedUsers({ id }));
  }

  addSharedAccess(data: SharedAccessData): void {
    this.store.dispatch(addSharedAccess({ data }));
  }

  deleteSharedAccess(user: User): void {
    this.store.dispatch(deleteSharedAccess({ value: user }));
  }
}
