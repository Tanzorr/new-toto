import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { VaultListService } from './services/vault-list.service';
import { Observable } from 'rxjs';
import { PaginatedVaultsResponse, Vault } from '../../../../../models/vault';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VaultsListTableModule } from '../../../../presentational/vaults/vaults-list-tabe/vaults-list-table.module';
import { SearchModule } from '../../../../libs/search/search.module';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-vaults-list',
  templateUrl: './vaults-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, VaultsListTableModule, SearchModule],
})
export class VaultsListComponent implements OnInit {
  vaultsPaginateResponse!: PaginatedVaultsResponse;
  vaultsPaginateResponse$!: Observable<PaginatedVaultsResponse>;
  private passwordsListUrl = 'passwords-list';
  private destroyRef = inject(DestroyRef);
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
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: PaginatedVaultsResponse) => {
        this.vaultsPaginateResponse = response;
        const vaultId = response.data[0]?.id;

        if (vaultId) {
          this.getVault(vaultId);
        }

        this.changeDetectorRef.markForCheck();
      });

    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event instanceof NavigationEnd && this.router.url === '/vaults') {
        this.vaultsListService.getVaults();
      }
    });
  }

  getVault(id: Vault['id']): void {
    this.vaultsListService.getVault(id);

    this.router
      .navigate([`/vaults/${id}/${this.getActiveListUrl(this.router.url)}`])
      .then((r) => console.log(r));
  }
  getSearchValue(searchValue: string): void {
    this.vaultsListService.getVaults({ search: searchValue });
  }

  private getActiveListUrl(currentUlr: string): string {
    const currentUrlArray = currentUlr.split('/');
    return currentUrlArray[3] || this.passwordsListUrl;
  }
}
