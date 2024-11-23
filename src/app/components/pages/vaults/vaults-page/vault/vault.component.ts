import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VaultService } from './services/vault.service';
import { Vault } from '../../../../../models/vault';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VaultComponent {
  vault$ = this.vaultService.vault$;
  constructor(private vaultService: VaultService) {
    this.vault$ = this.vaultService.vault$;
  }

  deleteVault(id: Vault['id']): void {
    this.vaultService.deleteVault(id);
  }
}
