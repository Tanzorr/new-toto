import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../../../../../../models/user';
import { UserCreateService } from './sevices/user-create.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent {
  constructor(private _userCreateService: UserCreateService) {}

  createUser(userData: User) {
    this._userCreateService.addUser(userData);
  }
}
