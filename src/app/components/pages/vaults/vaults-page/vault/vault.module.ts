import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultComponent } from './vault.component';
import { PasswordsListModule } from '../passwords-list/passwords-list.module';
import { AddVaultModalModule } from '../../../../presentational/vaults/add-vault-modal/add-vault-modal.module';
import { EditVaultModalModule } from '../../../../presentational/vaults/edit-vault-modal/edit-vault-modal.module';
import { VaultRoutesModule } from './vault-routes.module';

@NgModule({
  declarations: [VaultComponent],
  imports: [
    CommonModule,
    PasswordsListModule,
    AddVaultModalModule,
    EditVaultModalModule,
    VaultRoutesModule,
  ],
  exports: [VaultComponent],
})
export class VaultModule {}
