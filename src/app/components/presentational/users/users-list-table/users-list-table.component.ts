import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginatedUsersResponse } from '../../../../models/paginate-users-response';

const URL = 'http://127.0.0.1:8000/api/users?page=';

@Component({
  selector: 'app-users-list-table',
  templateUrl: './users-list-table.component.html',
  styleUrls: ['./users-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListTableComponent {
  private _paginatedUsersResponse: PaginatedUsersResponse = {} as PaginatedUsersResponse;

  @Input()
  set paginatedUsersResponse(value: PaginatedUsersResponse | null) {
    this._paginatedUsersResponse = value ? value : ({} as PaginatedUsersResponse);
  }

  get paginatedUsersResponse(): PaginatedUsersResponse {
    return <PaginatedUsersResponse>this._paginatedUsersResponse;
  }

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() pageParams = new EventEmitter<string | null>();

  deleteUser(index: number) {
    this.delete.emit(index);
  }

  getPageParams(param: PageChangedEvent) {
    const url = URL + param.page;
    this.pageParams.emit(url);
  }
}
