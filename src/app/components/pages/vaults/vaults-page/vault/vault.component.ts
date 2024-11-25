import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VaultService } from './services/vault.service';
import { Vault } from '../../../../../models/vault';
import { ModalService } from '../../../../../services/ui/modal.service';

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
    private modalService: ModalService
  ) {
    this.vault$ = this.vaultService.vault$;
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
