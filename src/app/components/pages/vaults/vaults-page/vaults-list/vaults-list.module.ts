import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultsListComponent } from './vaults-list.component';
import { VaultsListTableModule } from '../../../../presentational/vaults/vaults-list-tabe/vaults-list-table.module';
import { SearchModule } from '../../../../libs/search/search.module';

@NgModule({
  declarations: [VaultsListComponent],
  imports: [CommonModule, VaultsListTableModule, SearchModule],
  exports: [VaultsListComponent],
})
export class VaultsListModule {}
