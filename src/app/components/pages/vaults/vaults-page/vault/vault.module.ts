import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultComponent } from './vault.component';
import { PasswordsListTableModule } from '../../../../presentational/passwords/passwords-list-table/passwords-list-table.module';
import { PasswordsListModule } from '../passwords-list/passwords-list.module';

@NgModule({
  declarations: [VaultComponent],
  imports: [CommonModule, PasswordsListModule],
  exports: [VaultComponent],
})
export class VaultModule {}
