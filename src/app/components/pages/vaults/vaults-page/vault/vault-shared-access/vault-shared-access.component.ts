import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { VaultSharedAccessService } from './services/vault-shared-access.service';
import { Vault } from '../../../../../../models/vault';
import { Observable, Subject, takeUntil } from 'rxjs';
import { User } from '../../../../../../models/user';
import { SharedAccessData } from '../../../../../../models/shared-access';
import { EntityType } from '../../../../../../constans/entity-type';
import { Columns } from '../../../../../../models/columns';

@Component({
  selector: 'app-vault-shared-access',
  templateUrl: './vault-shared-access.component.html',
  styleUrls: ['./vault-shared-access.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultSharedAccessComponent implements OnInit, OnDestroy {
  notAccessedUsers$: Observable<User[]>;
  accessUsers$: Observable<User[]>;
  vaultId!: Vault['id'];
  private destroy$ = new Subject<void>();
  columns!: Columns[];

  constructor(private vaultSharedAccessService: VaultSharedAccessService) {
    this.notAccessedUsers$ = this.vaultSharedAccessService.notAccessedUsers$;
    this.accessUsers$ = this.vaultSharedAccessService.accessedUsers$;
    this.columns = [
      { header: 'Name', field: 'name' },
      { header: 'Actions', field: 'actions', template: true },
    ];
  }

  ngOnInit(): void {
    this.vaultSharedAccessService.vault$.pipe(takeUntil(this.destroy$)).subscribe((vault) => {
      if (vault) {
        this.vaultSharedAccessService.getNotAccessedUsers(vault.id);
        this.vaultSharedAccessService.getAccessedUsers(vault.id);
        this.vaultId = vault.id;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getSearchValue($event: string) {
    this.vaultSharedAccessService.getNotAccessedUsers(this.vaultId, { search: $event });
  }

  addSharedAccess(userId: User['id']): void {
    const accessData: SharedAccessData = {
      accessible_id: this.vaultId,
      accessible_type: EntityType.VAULT,
      user_id: userId,
    };
    this.vaultSharedAccessService.addSharedAccess(accessData);
  }

  deleteSharedAccess(userId: User['id']): void {
    const accessData: SharedAccessData = {
      accessible_id: this.vaultId,
      accessible_type: EntityType.VAULT,
      user_id: userId,
    };

    this.vaultSharedAccessService.deleteSharedAccess(accessData);
  }
}
