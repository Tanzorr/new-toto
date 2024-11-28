import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { VaultListService } from './services/vault-list.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { PaginatedVaultsResponse, Vault } from '../../../../../models/vault';

@Component({
  selector: 'app-vaults-list',
  templateUrl: './vaults-list.component.html',
  styleUrls: ['./vaults-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultsListComponent implements OnInit, OnDestroy {
  vaultsPaginateResponse!: PaginatedVaultsResponse;
  vaultsPaginateResponse$!: Observable<PaginatedVaultsResponse>;
  private destroy$ = new Subject<void>();
  constructor(
    private vaultsListService: VaultListService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.vaultsPaginateResponse$ = this.vaultsListService.paginatedVaultsResponse$;
    this.vaultsListService.getVaults();
  }

  ngOnInit(): void {
    this.vaultsPaginateResponse$
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: PaginatedVaultsResponse) => {
        this.vaultsPaginateResponse = response;
        const vaultId = response.data[0]?.id;

        if (vaultId) {
          this.getVaultById(vaultId);
        }

        this.changeDetectorRef.markForCheck();
      });
  }

  getVaultById(id: Vault['id']): void {
    this.vaultsListService.getVault(id);
  }

  getVaultsWithParams(url: string | null): void {
    this.vaultsListService.getVaults(url);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
