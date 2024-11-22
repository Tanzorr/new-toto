import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultsListTableComponent } from './vaults-list-table.component';

@NgModule({
  declarations: [VaultsListTableComponent],
  imports: [CommonModule],
  exports: [VaultsListTableComponent],
})
export class VaultsListTableModule {}
