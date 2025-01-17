import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserLoginService } from './services/user-login.service';
import { AuthLoginData } from '../../../../../../models/auth-login-data';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {
  constructor(private userLoginService: UserLoginService) {}

  onSubmit(loginData: AuthLoginData): void {
    this.userLoginService.login(loginData);
  }
}
