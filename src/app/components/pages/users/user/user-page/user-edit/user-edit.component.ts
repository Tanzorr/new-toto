import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User, UserCreateData} from "../../../../../../models/entities/User";
import {EditUserService} from "./services/edit-user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditComponent implements OnInit {
    user$: Observable<User>;

    constructor(private _editUserService: EditUserService) {
        this.user$ = this._editUserService.user$;
        this._editUserService.getUser();
    }

    ngOnInit(): void {
        this._editUserService.getUser();
    }

  updateUser(user: User): void {
      this._editUserService.updateUser(user);
    }
}
