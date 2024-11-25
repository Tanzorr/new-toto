import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddVaultModalComponent } from '../../presentational/vaults/add-vault-modal/add-vault-modal.component';

@Component({
  selector: 'app-vaults',
  templateUrl: './vaults.component.html',
  styleUrls: ['./vaults.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultsComponent {
  constructor(private modalService: NgbModal) {}

  openAddVaultModal() {
    const modalRef = this.modalService.open(AddVaultModalComponent);

    modalRef.result
      .then(
        (vaultData) => {
          if (vaultData) {
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
}
