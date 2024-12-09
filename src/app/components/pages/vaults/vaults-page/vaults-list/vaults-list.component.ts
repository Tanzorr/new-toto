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
import { ActivatedRoute, Router } from '@angular/router';
import { getVault } from '../../../../../store/valuts/vaults-actions';

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
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
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
          this.getVault(vaultId);
        }

        this.changeDetectorRef.markForCheck();
      });
  }

  getVaultsWithParams(url: string | null): void {
    this.vaultsListService.getVaults();
  }

  getVault(id: Vault['id']): void {
    this.vaultsListService.getVault(id);
    this.router.navigate([`/vaults/${id}/passwords-list`]).then((r) => console.log(r));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getSearchValue(searchValue: string): void {
    this.vaultsListService.getVaults({ search: searchValue });
  }
}
