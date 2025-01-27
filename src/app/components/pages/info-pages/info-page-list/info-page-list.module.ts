import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPageListComponent } from './info-page-list.component';
import { InfoPageListRoutingModule } from './info-page-list-routing.module';
import { TableComponent } from '../../../libs/table/table.component';

@NgModule({
  declarations: [InfoPageListComponent],
  imports: [CommonModule, InfoPageListRoutingModule, TableComponent],
})
export class InfoPageListModule {}
