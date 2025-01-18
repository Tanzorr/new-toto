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
  updateSharedAccess,
} from '../../../../../../../store/shared-access/shared-access-actions';
import { QueryParams } from '../../../../../../../models/query-params';
import { VaultService } from '../../services/vault.service';
import { SharedAccess, SharedAccessData } from '../../../../../../../models/shared-access';
import { User } from '../../../../../../../models/user';
import { Vault } from '../../../../../../../models/vault';
import { EntityType } from '../../../../../../../constans/entity-type';

@Injectable({
  providedIn: 'root',
})
export class VaultSharedAccessService {
  temporaryAccessExpiration: Record<User['id'], any> = {};

  notAccessedUsers$ = this.store.select(notAccessedUsersSelector);
  accessedUsers$ = this.store.select(accessedUsersSelector);

  vault$ = this.vaultService.vault$;
  constructor(
    private store: Store<SharedAccessState>,
    private vaultService: VaultService
  ) {}

  fetchAccessData(vaultId: Vault['id']): void {
    this.getNotAccessedUsers(vaultId);
    this.getAccessedUsers(vaultId);
  }
  getNotAccessedUsers(id: string, params?: QueryParams): void {
    this.store.dispatch(getNotAccessedUsers({ id, params }));
  }

  getAccessedUsers(id: string): void {
    this.store.dispatch(getAccessedUsers({ id }));
  }

  addSharedAccess(data: SharedAccessData): void {
    this.store.dispatch(addSharedAccess({ data }));
  }

  deleteSharedAccess(user: User): void {
    this.store.dispatch(deleteSharedAccess({ user }));
  }

  handleAddSharedAccess(userId: User['id'], vault: Vault): void {
    const accessData: SharedAccessData = {
      accessible_id: vault.id,
      accessible_type: EntityType.VAULT,
      user_id: userId,
      expires_at: this.temporaryAccessExpiration[userId],
    };
    this.addSharedAccess(accessData);
  }

  getExpiredDate(userId: User['id'], vault: Vault): string {
    const sharedAccess = this.getSharedAccess(userId, vault);
    return sharedAccess?.expires_at
      ? this.formatDateToISOString(new Date(sharedAccess.expires_at))
      : this.temporaryAccessExpiration[userId] || '';
  }

  setExpiredDate($event: Event, userId: User['id']): string {
    const target = $event.target as HTMLInputElement;
    const dateValue: string = target.value;
    this.temporaryAccessExpiration[userId] = dateValue
      ? this.formatDateToISOString(new Date(dateValue))
      : null;

    return this.temporaryAccessExpiration[userId];
  }

  handleUpdateSharedAccess($event: Event, userId: User['id'], vault: Vault): void {
    const sharedAccess = this.getSharedAccess(userId, vault);

    if (sharedAccess) {
      this.updateSharedAccess({
        ...sharedAccess,
        expires_at: this.setExpiredDate($event, userId),
      });
    }
  }

  updateSharedAccess(sharedAccess: SharedAccess): void {
    this.store.dispatch(updateSharedAccess({ sharedAccess }));
  }

  formatDateToISOString(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  getSharedAccess(userId: User['id'], vault: Vault): SharedAccess | undefined {
    return vault.shared_access.find((access) => access.user_id === userId);
  }
}
