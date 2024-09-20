import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {Users} from "../../../../../models/entities/User";
import {UsersListService} from "./services/users-list.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  users$: Observable<Users>;
  constructor(private _usersService: UsersListService) {
    this._usersService.getUsers();
    this.users$ = this._usersService.users$;
  }
}
