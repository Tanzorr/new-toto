import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {PaginatedUsersResponse, Users} from "../../../../../models/entities/User";
import {UsersListService} from "./services/users-list.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  paginatedUsersResponse$: Observable<PaginatedUsersResponse>;
  currentUrl: string | null = null;
  constructor(private _usersService: UsersListService) {
    this._usersService.getUsers();
    this.paginatedUsersResponse$ = this._usersService.paginatedUsersResponse$;
  }

  gerUsersWithParams(url: string | null): void {
    this._usersService.getUsers(url);
    this.currentUrl = url;
  }

  deleteUser(id: number): void {
    this._usersService.deleteUser(id);
    this._usersService.getUsers(this.currentUrl);
  }
}
