import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserViewService } from './services/user-view.service';
import { Columns } from '../../../../../../models/columns';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserViewComponent {
  user$ = this.userService.user$;

  columns: Columns[] = [];

  constructor(private userService: UserViewService) {
    this.userService.getUser();

    this.columns = [{ header: 'Vault name', field: 'name' }];
  }
}
