import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectorRef,
  SimpleChanges
} from '@angular/core';
import {PaginatedUsersResponse} from "../../../../models/entities/User";

@Component({
  selector: 'app-users-list-table',
  templateUrl: './users-list-table.component.html',
  styleUrls: ['./users-list-table.component.scss']
})
export class UsersListTableComponent {

  private _paginatedUsersResponse: PaginatedUsersResponse  = {} as PaginatedUsersResponse;

  @Input()
  set paginatedUsersResponse(value: PaginatedUsersResponse | null) {
    console.log('vaule:', value);
    this._paginatedUsersResponse = value ? value : {} as PaginatedUsersResponse;
    this.cdr.detectChanges();
    this.cdr.markForCheck()
  }

  get paginatedUsersResponse(): PaginatedUsersResponse {
    return <PaginatedUsersResponse>this._paginatedUsersResponse;
  }

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() pageParams = new EventEmitter<string | null>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['paginatedUsersResponse']) {
      console.log('Changes detected in paginatedUsersResponse:', changes['paginatedUsersResponse'].currentValue);
    }
  }

  editUser(index: number) {
    this.edit.emit(index);
  }

  deleteUser(index: number) {
    this.delete.emit(index);
    this.setPaginateUsersResponse();
  }

  getPageParams(url: string | null) {
    this.pageParams.emit(url);
  }

  private setPaginateUsersResponse() {

  }
}
