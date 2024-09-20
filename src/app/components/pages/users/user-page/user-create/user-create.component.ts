import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserCreateData} from "../../../../../models/entities/User";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCreateComponent {

  constructor() {
    console.log('UserCreateComponent');
  }

  createUser(userData: UserCreateData) {
    console.log('Creating user:', userData);
  }
}
