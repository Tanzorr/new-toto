import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VaultService } from './services/vault.service';
import { CreateVault, Vault } from '../../../../../models/vault';
import { ModalService } from '../../../../../services/ui/modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddVaultModalComponent } from '../../../../presentational/vaults/add-vault-modal/add-vault-modal.component';
import { EditVaultModalComponent } from '../../../../presentational/vaults/edit-vault-modal/edit-vault-modal.component';
import { User } from '../../../../../models/user';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultComponent {
  vault$ = this.vaultService.vault$;

  constructor(
    private vaultService: VaultService,
    private modalService: ModalService,
    private addModalService: NgbModal
  ) {
    this.vault$ = this.vaultService.vault$;
  }

  openAddVaultModal(): void {
    const modalRef = this.addModalService.open(AddVaultModalComponent);
    modalRef.result
      .then(
        (vaultData: CreateVault) => {
          if (vaultData) {
            const loggedUser = localStorage.getItem('logged_user');
            if (loggedUser) {
              vaultData.user_id = JSON.parse(loggedUser).id;
            }
            this.vaultService.addVault(vaultData);
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

  openEditVaultModal(vaultData: Vault): void {
    const modalRef = this.addModalService.open(EditVaultModalComponent);

    modalRef.componentInstance.vaultData = vaultData;

    modalRef.result
      .then(
        (vaultData: Vault) => {
          if (vaultData) {
            this.vaultService.updateVault(vaultData);
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

  deleteVault(id: Vault['id']): void {
    this.modalService
      .openModal({
        title: 'Delete vault',
        body: 'Are you sure you want to delete this vault?',
        confirmButtonText: 'Delete',
        confirmButtonClass: 'btn-success',
        cancelButtonText: 'Cancel',
        cancelButtonClass: 'btn-danger',
      })
      .then((result: boolean): void => {
        if (result) {
          this.vaultService.deleteVault(id);
        }
      })
      .catch((error: number): void => {
        console.log('Error:', error);
      });
  }
}
