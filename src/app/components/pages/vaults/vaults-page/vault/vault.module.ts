import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultComponent } from './vault.component';
import { PasswordsListTableModule } from '../../../../presentational/passwords/passwords-list-table/passwords-list-table.module';

@NgModule({
  declarations: [VaultComponent],
  imports: [CommonModule, PasswordsListTableModule],
  exports: [VaultComponent],
})
export class VaultModule {}
