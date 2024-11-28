import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultsListTableComponent } from './vaults-list-table.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [VaultsListTableComponent],
  imports: [CommonModule, PaginationModule],
  exports: [VaultsListTableComponent],
})
export class VaultsListTableModule {}
