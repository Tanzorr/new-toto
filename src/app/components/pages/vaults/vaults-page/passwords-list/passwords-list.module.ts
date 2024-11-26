import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordsListComponent } from './passwords-list.component';
import { PasswordsListTableModule } from '../../../../presentational/passwords/passwords-list-table/passwords-list-table.module';
import { AddPasswordModalModule } from '../../../../presentational/passwords/add-password-modal/add-password-modal.module';

@NgModule({
  declarations: [PasswordsListComponent],
  imports: [CommonModule, PasswordsListTableModule, AddPasswordModalModule],
  exports: [PasswordsListComponent],
})
export class PasswordsListModule {}
