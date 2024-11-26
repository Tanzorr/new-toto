import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Password } from '../../../../../models/password';
import { PasswordService } from './services/password.service';
import { ModalService } from '../../../../../services/ui/modal.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPasswordModalComponent } from '../../../../presentational/passwords/add-password-modal/add-password-modal.component';
import { CreatePassword } from '../../../../../models/password';

@Component({
  selector: 'app-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrls: ['./passwords-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordsListComponent {
  @Input() vaultId!: string | number;
  passwords$: Observable<Password[]> = new Observable<Password[]>();

  constructor(
    private passwordService: PasswordService,
    private modalService: ModalService,
    private ngbModalService: NgbModal
  ) {
    this.passwords$ = this.passwordService.passwords$;
  }

  openAddPasswordModal() {
    const modalRef = this.ngbModalService.open(AddPasswordModalComponent);

    modalRef.result
      .then(
        (passwordData: CreatePassword) => {
          const addPasswordData = { ...passwordData, vault_id: this.vaultId };

          if (addPasswordData) {
            this.passwordService.addPassword(addPasswordData);
          }
        },
        () => {
          console.log('Modal dismissed');
        }
      )
      .catch((error) => {
        console.log({ error });
      });
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
