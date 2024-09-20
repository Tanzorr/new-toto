import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../../../models/entities/User";

@Component({
  selector: 'app-users-list-table',
  templateUrl: './users-list-table.component.html',
  styleUrls: ['./users-list-table.component.scss']
})
export class UsersListTableComponent {

  private _users: User[] = [];

  @Input()
  set users(value: User[] | null) {
    this._users = value ? value : [];
  }

  get users(): User[] {
    return this._users;
  }

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  editUser(index: number) {
    this.edit.emit(index);
  }

  deleteUser(index: number) {
    this.delete.emit(index);
  }
}
