import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Password } from '../../../../../models/password';
import { PasswordService } from './services/password.service';
import { ModalService } from '../../../../../services/ui/modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrls: ['./passwords-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordsListComponent {
  passwords$: Observable<Password[]> = new Observable<Password[]>();

  constructor(
    private passwordService: PasswordService,
    private modalService: ModalService
  ) {
    this.passwords$ = this.passwordService.passwords$;
  }

  deletePassword(id: Password['id']): void {
    this.modalService
      .openModal({
        title: 'Delete password',
        body: 'Are you sure you want to delete this password?',
        confirmButtonText: 'Delete',
        confirmButtonClass: 'btn-success',
        cancelButtonText: 'Cancel',
        cancelButtonClass: 'btn-danger',
      })
      .then((result: boolean): void => {
        if (result) {
          this.passwordService.deletePassword(id);
        }
      })
      .catch((error: number): void => {
        console.log('Error:', error);
      });
  }
}
