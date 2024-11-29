import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordsListComponent } from './passwords-list.component';
import { PasswordsListTableModule } from '../../../../presentational/passwords/passwords-list-table/passwords-list-table.module';
import { AddPasswordModalModule } from '../../../../presentational/passwords/add-password-modal/add-password-modal.module';
import { EditPasswordModalModule } from '../../../../presentational/passwords/edit-password-modal/edit-password-modal.module';
import { SearchModule } from '../../../../libs/search/search.module';

@NgModule({
  declarations: [PasswordsListComponent],
  imports: [
    CommonModule,
    PasswordsListTableModule,
    AddPasswordModalModule,
    EditPasswordModalModule,
    SearchModule,
  ],
  exports: [PasswordsListComponent],
})
export class PasswordsListModule {}
