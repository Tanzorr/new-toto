import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserViewService } from './services/user-view.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserViewComponent {
  user$ = this.userService.user$;
  constructor(private userService: UserViewService) {
    this.userService.getUser();
  }
}
