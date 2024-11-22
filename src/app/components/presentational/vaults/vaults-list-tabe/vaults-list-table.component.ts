import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Vault } from '../../../../models/vault';

class PaginatedVaultsResponse {
  data: any[] = [];
}

@Component({
  selector: 'app-vaults-list-table',
  templateUrl: './vaults-list-table.component.html',
  styleUrls: ['./vaults-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultsListTableComponent {
  private _paginatedVaultsResponse: PaginatedVaultsResponse = {} as PaginatedVaultsResponse;
  @Input()
  set paginatedVaultsResponse(value: PaginatedVaultsResponse | null) {
    this._paginatedVaultsResponse = value ? value : ({} as PaginatedVaultsResponse);
  }

  @Output() selectedVaultId: EventEmitter<Vault['id']> = new EventEmitter<Vault['id']>();

  get paginatedVaultsResponse(): PaginatedVaultsResponse {
    return <PaginatedVaultsResponse>this._paginatedVaultsResponse;
  }

  getVault(id: Vault['id']): void {
    this.selectedVaultId.emit(id);
  }
}
