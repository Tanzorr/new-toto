import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Password } from '../../../../models/password';

@Component({
  selector: 'app-password-list-table',
  templateUrl: './password-list-table.component.html',
  styleUrls: ['./password-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordListTableComponent {
  @Input() passwordList: Password[] | null = [];
  @Output() deletePassword = new EventEmitter<Password['id']>();
  @Output() updatePassword = new EventEmitter<Password>();
  constructor() {}

  deletePasswordById(id: Password['id']): void {
    this.deletePassword.emit(id);
  }

  updatePasswordById(value: Password): void {
    this.updatePassword.emit(value);
  }
}
