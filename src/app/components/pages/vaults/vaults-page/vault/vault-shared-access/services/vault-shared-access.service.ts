import { Injectable } from '@angular/core';
import { SharedAccessState } from '../../../../../../../store/shared-access/shared-access-reducers';
import { Store } from '@ngrx/store';
import { notAccessedUsersSelector } from '../../../../../../../store/shared-access/shared-access-selectors';
import { getNotAccessedUsers } from '../../../../../../../store/shared-access/shared-access-actions';
import { QueryParams } from '../../../../../../../models/query-params';
import { VaultService } from '../../services/vault.service';

@Injectable({
  providedIn: 'root',
})
export class VaultSharedAccessService {
  notAccessedUsers$ = this.store.select(notAccessedUsersSelector);
  vault$ = this.vaultService.vault$;
  constructor(
    private store: Store<SharedAccessState>,
    private vaultService: VaultService
  ) {}

  getNotAccessedUsers(id: number, params?: QueryParams): void {
    this.store.dispatch(getNotAccessedUsers({ id, params }));
  }
}
