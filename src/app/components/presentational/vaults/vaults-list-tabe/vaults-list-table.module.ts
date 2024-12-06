import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultsListTableComponent } from './vaults-list-table.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [VaultsListTableComponent],
  imports: [CommonModule, PaginationModule, RouterLink],
  exports: [VaultsListTableComponent],
})
export class VaultsListTableModule {}
