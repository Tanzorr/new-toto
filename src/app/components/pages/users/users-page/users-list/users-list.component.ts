import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersListService } from './services/users-list.service';
import { ModalService } from '../../../../../services/ui/modal.service';
import { PaginatedUsersResponse } from '../../../../../models/paginate-users-response';
import { Columns } from '../../../../../models/columns';
import { LocalStorageService } from '../../../../../services/storage/local-storage.service';
import { User } from '../../../../../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements AfterViewInit {
  loggedUser!: User;
  paginatedUsersResponse$: Observable<PaginatedUsersResponse>;

  columns!: Columns[];

  constructor(
    private _usersService: UsersListService,
    private _modalService: ModalService,
    private storageService: LocalStorageService
  ) {
    this._usersService.getUsers();
    this.paginatedUsersResponse$ = this._usersService.paginatedUsersResponse$;
    this.loggedUser = JSON.parse(this.storageService.get('logged_user') || '{}');
  }

  ngAfterViewInit(): void {
    this.columns = [
      { header: 'Name', field: 'name' },
      { header: 'Actions', template: true },
    ];
  }

  getUsersWithParams(params: any): void {
    this._usersService.getUsers(params);
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
    this.getUsersWithParams({ search: searchValue });
  }
}
