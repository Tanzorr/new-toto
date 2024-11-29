import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultsListComponent } from './vaults-list.component';
import { VaultsListRoutesModule } from './vaults-list-routes.module';
import { VaultsListTableModule } from '../../../../presentational/vaults/vaults-list-tabe/vaults-list-table.module';
import { SearchModule } from '../../../../libs/search/search.module';

@NgModule({
  declarations: [VaultsListComponent],
  imports: [CommonModule, VaultsListRoutesModule, VaultsListTableModule, SearchModule],
})
export class VaultsListModule {}
