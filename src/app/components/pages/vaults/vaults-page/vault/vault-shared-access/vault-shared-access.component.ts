import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { VaultSharedAccessService } from './services/vault-shared-access.service';
import { Vault } from '../../../../../../models/vault';
import { Observable } from 'rxjs';
import { User } from '../../../../../../models/user';
import { Columns } from '../../../../../../models/columns';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-vault-shared-access',
  templateUrl: './vault-shared-access.component.html',
  styleUrls: ['./vault-shared-access.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultSharedAccessComponent implements OnInit {
  scrollableAriaHeight = 10;
  notAccessedUsers$: Observable<User[]>;
  accessUsers$: Observable<User[]>;
  vault!: Vault;
  columns!: Columns[];

  constructor(
    private vaultSharedAccessService: VaultSharedAccessService,
    private destroyRef: DestroyRef
  ) {
    this.notAccessedUsers$ = this.vaultSharedAccessService.notAccessedUsers$;
    this.accessUsers$ = this.vaultSharedAccessService.accessedUsers$;
    this.columns = [
      { header: 'Name', field: 'name' },
      { header: 'Actions', field: 'actions', template: true },
    ];
  }

  ngOnInit(): void {
    this.vaultSharedAccessService.vault$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((vault) => {
        if (vault) {
          this.vaultSharedAccessService.fetchAccessData(vault.id);
          this.vault = vault;
        }
      });
  }

  searchNotAccessedUsers($event: string) {
    if (!this.vault) return;
    this.vaultSharedAccessService.getNotAccessedUsers(this.vault.id, { search: $event });
  }

  addSharedAccess(userId: User['id']): void {
    this.vaultSharedAccessService.handleAddSharedAccess(userId, this.vault);
  }

  deleteSharedAccess(user: User): void {
    this.vaultSharedAccessService.deleteSharedAccess(user);
  }

  getExpiredDate(userId: User['id']): string {
    return this.vaultSharedAccessService.getExpiredDate(userId, this.vault);
  }

  setExpiredDate($event: Event, userId: User['id']): void {
    this.vaultSharedAccessService.handleUpdateSharedAccess($event, userId, this.vault);
  }
}
