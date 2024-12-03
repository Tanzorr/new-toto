import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Password } from '../../../../../models/password';
import { PasswordService } from './services/password.service';
import { ModalService } from '../../../../../services/ui/modal.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPasswordModalComponent } from '../../../../presentational/passwords/add-password-modal/add-password-modal.component';
import { CreatePassword } from '../../../../../models/password';
import { EditPasswordModalComponent } from '../../../../presentational/passwords/edit-password-modal/edit-password-modal.component';

@Component({
  selector: 'app-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrls: ['./passwords-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordsListComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @Input() vaultId!: string | number;
  passwords$: Observable<Password[]> = new Observable<Password[]>();

  constructor(
    private passwordService: PasswordService,
    private modalService: ModalService,
    private ngbModalService: NgbModal
  ) {
    this.passwords$ = this.passwordService.passwords$;
  }

  addPasswordModal() {
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

  updatePasswordModal(passwordData: Password): void {
    const modalRef = this.ngbModalService.open(EditPasswordModalComponent);

    modalRef.componentInstance.setPassData(passwordData);

    modalRef.result
      .then(
        (passwordData: Password) => {
          if (passwordData) {
            console.log({ passwordData });
            this.passwordService.updatePassword(passwordData);
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

  deletePasswordModel(id: Password['id']): void {
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

  getSearch(vale: string) {
    this.passwordService.searchPassword(vale);
    this.scrollToTop();
  }

  private scrollToTop() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop = 0;
    }
  }
}
