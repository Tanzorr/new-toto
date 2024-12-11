import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { VaultSharedAccessService } from './services/vault-shared-access.service';
import { Vault } from '../../../../../../models/vault';
import { Observable, Subject, takeUntil } from 'rxjs';
import { User } from '../../../../../../models/user';

@Component({
  selector: 'app-vault-shared-access',
  templateUrl: './vault-shared-access.component.html',
  styleUrls: ['./vault-shared-access.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultSharedAccessComponent implements OnInit, OnDestroy {
  notAccessedUsers$: Observable<User[]>;
  vaultId!: Vault['id'];
  private destroy$ = new Subject<void>();
  constructor(private vaultSharedAccessService: VaultSharedAccessService) {
    this.notAccessedUsers$ = this.vaultSharedAccessService.notAccessedUsers$;
  }

  ngOnInit(): void {
    this.vaultSharedAccessService.vault$.pipe(takeUntil(this.destroy$)).subscribe((vault) => {
      if (vault) {
        this.getNotAccessedUsers(vault.id);
        this.vaultId = vault.id;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getNotAccessedUsers(vaultId: Vault['id']): void {
    this.vaultSharedAccessService.getNotAccessedUsers(vaultId);
  }

  getSearchValue($event: string) {
    this.vaultSharedAccessService.getNotAccessedUsers(this.vaultId, { search: $event });
  }
}
