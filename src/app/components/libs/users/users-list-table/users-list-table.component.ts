import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import {PaginatedUsersResponse} from "../../../../models/entities/User";

@Component({
  selector: 'app-users-list-table',
  templateUrl: './users-list-table.component.html',
  styleUrls: ['./users-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListTableComponent {

  private _paginatedUsersResponse: PaginatedUsersResponse  = {} as PaginatedUsersResponse;

  @Input()
  set paginatedUsersResponse(value: PaginatedUsersResponse | null) {
    this._paginatedUsersResponse = value ? value : {} as PaginatedUsersResponse;
  }

  get paginatedUsersResponse(): PaginatedUsersResponse {
    return <PaginatedUsersResponse>this._paginatedUsersResponse;
  }

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() pageParams = new EventEmitter<string | null>();

  constructor(private cdr: ChangeDetectorRef) { }

  deleteUser(index: number) {
    this.delete.emit(index);
  }

  getPageParams(url: string | null) {
    this.pageParams.emit(url);
  }
}
