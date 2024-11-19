import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../../../models/user';
import { EditUserService } from './services/edit-user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent {
  user$: Observable<User>;

  constructor(private _editUserService: EditUserService) {
    this.user$ = this._editUserService.user$;
    this._editUserService.getUser();
  }

  updateUser(user: User): void {
    this._editUserService.updateUser(user);
  }
}
