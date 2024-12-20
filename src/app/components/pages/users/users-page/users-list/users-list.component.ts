import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersListService } from './services/users-list.service';
import { ModalService } from '../../../../../services/ui/modal.service';
import { PaginatedUsersResponse } from '../../../../../models/paginate-users-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  paginatedUsersResponse$: Observable<PaginatedUsersResponse>;
  currentUrl: string | null = null;
  constructor(
    private _usersService: UsersListService,
    private _modalService: ModalService
  ) {
    this._usersService.getUsers();
    this.paginatedUsersResponse$ = this._usersService.paginatedUsersResponse$;
  }

  getUsersWithParams({
    url = null,
    queryParams = {},
  }: {
    url?: string | null;
    queryParams?: any;
  }): void {
    this._usersService.getUsers(url, queryParams);
    this.currentUrl = url;
  }

  deleteUser(id: number): void {
    this._modalService
      .openModal({
        title: 'Delete user',
        body: 'Are you sure you want to delete this user?',
        confirmButtonText: 'Delete',
        confirmButtonClass: 'btn-success',
        cancelButtonText: 'Cancel',
        cancelButtonClass: 'btn-danger',
      })
      .then((result: boolean): void => {
        if (result) {
          this._usersService.deleteUser(id);
        }
      })
      .catch((error: number): void => {
        console.log('Error:', error);
      });
  }

  getSearchValue(searchValue: string): void {
    this.getUsersWithParams({ queryParams: { search: searchValue } });
  }
}
