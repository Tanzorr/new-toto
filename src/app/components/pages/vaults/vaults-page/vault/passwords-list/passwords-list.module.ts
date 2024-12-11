import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordsListComponent } from './passwords-list.component';

import { AddPasswordModalModule } from '../../../../../presentational/passwords/add-password-modal/add-password-modal.module';
import { EditPasswordModalModule } from '../../../../../presentational/passwords/edit-password-modal/edit-password-modal.module';
import { SearchModule } from '../../../../../libs/search/search.module';
import { PasswordListRoutesModule } from './password-list-routes.module';
import { TableComponent } from '../../../../../libs/table/table.component';

@NgModule({
  declarations: [PasswordsListComponent],
  imports: [
    CommonModule,
    AddPasswordModalModule,
    EditPasswordModalModule,
    SearchModule,
    PasswordListRoutesModule,
    TableComponent,
  ],
})
export class PasswordsListModule {}
