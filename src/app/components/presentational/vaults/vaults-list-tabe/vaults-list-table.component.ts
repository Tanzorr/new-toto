import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PaginatedVaultsResponse, Vault } from '../../../../models/vault';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

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
  @Output() pageParams = new EventEmitter<string | null>();

  get paginatedVaultsResponse(): PaginatedVaultsResponse {
    return <PaginatedVaultsResponse>this._paginatedVaultsResponse;
  }

  getPageParams($event: PageChangedEvent) {
    this.pageParams.emit($event.page.toString());
  }

  selectVault(id: Vault['id']) {
    this.selectedVaultId.emit(id);
  }
}
