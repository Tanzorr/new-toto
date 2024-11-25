import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VaultListService } from './services/vault-list.service';
import { Observable } from 'rxjs';
import { Vault } from '../../../../../models/vault';

@Component({
  selector: 'app-vaults-list',
  templateUrl: './vaults-list.component.html',
  styleUrls: ['./vaults-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultsListComponent {
  vaultsPaginateResponse$!: Observable<any>;
  constructor(private vaultsListService: VaultListService) {
    this.vaultsPaginateResponse$ = this.vaultsListService.paginatedVaultsResponse$;
    this.vaultsListService.getVaults();
  }

  gitVaultId(id: Vault['id']): void {
    this.vaultsListService.getVault(id);
  }

  getVaultsWithParams(url: string | null): void {
    this.vaultsListService.getVaults(url);
  }
}
