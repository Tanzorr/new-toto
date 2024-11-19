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

  constructor(private editUserService: EditUserService) {
    this.user$ = this.editUserService.user$;
    this.editUserService.getUser();
  }

  updateUser(user: User): void {
    this.editUserService.updateUser(user);
  }
}
