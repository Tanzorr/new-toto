import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedUsersResponse } from '../../../../../models/entities/User';
import { UsersListService } from './services/users-list.service';
import { ModalService } from '../../../../../services/modals/modal.service';

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

  gerUsersWithParams(url: string | null): void {
    this._usersService.getUsers(url);
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
}
