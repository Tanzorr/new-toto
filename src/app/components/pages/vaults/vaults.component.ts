import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddVaultModalComponent } from '../../presentational/vaults/add-vault-modal/add-vault-modal.component';

@Component({
  selector: 'app-vaults',
  templateUrl: './vaults.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultsComponent {}
