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
    private router: Router,
    private activeRoute: ActivatedRoute
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
          this.router.navigate(['/vaults', vaultId]);
          this.vaultsListService.getVault();
        }

        this.changeDetectorRef.markForCheck();
      });

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.vaultsListService.getVault();
    });
  }

  getVaultsWithParams(url: string | null): void {
    this.vaultsListService.getVaults();
  }

  getVault(): void {
    getVault();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getSearchValue(searchValue: string): void {
    this.vaultsListService.getVaults({ search: searchValue });
  }

  protected readonly event = event;
}
