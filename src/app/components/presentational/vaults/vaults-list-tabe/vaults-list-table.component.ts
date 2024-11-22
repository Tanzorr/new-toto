import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  get paginatedVaultsResponse(): PaginatedVaultsResponse {
    return <PaginatedVaultsResponse>this._paginatedVaultsResponse;
  }
}
