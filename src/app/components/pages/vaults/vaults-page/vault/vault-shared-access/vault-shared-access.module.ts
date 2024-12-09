import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultSharedAccessComponent } from './vault-shared-access.component';
import { VaultSharedAccessRoutesModule } from './vault-shared-access-routes.module';
import { FormGroupModule } from '../../../../../libs/form-group/form-group.module';
import { SearchModule } from '../../../../../libs/search/search.module';
import { TableComponent } from '../../../../../libs/table/table.component';
import { ScrollableModule } from '../../../../../libs/scrollable/scrollable.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VaultSharedAccessComponent],
  imports: [
    CommonModule,
    VaultSharedAccessRoutesModule,
    FormGroupModule,
    SearchModule,
    TableComponent,
    ScrollableModule,
    FormsModule,
  ],
})
export class VaultSharedAccessModule {}
