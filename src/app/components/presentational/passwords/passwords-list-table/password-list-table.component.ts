import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Password } from '../../../../models/password';

@Component({
  selector: 'app-password-list-table',
  templateUrl: './password-list-table.component.html',
  styleUrls: ['./password-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordListTableComponent {
  @Input() passwordList: Password[] = [];
  constructor() {}
}
