import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view.component';
import { UserViewRoutingModule } from './user-view-routing.module';
import { VaultsListTableModule } from '../../../../../presentational/vaults/vaults-list-tabe/vaults-list-table.module';
import { StaticVaultsListModule } from '../../../../../presentational/vaults/static-vaults-list/static-vaults-list.module';

@NgModule({
  declarations: [UserViewComponent],
  imports: [CommonModule, UserViewRoutingModule, VaultsListTableModule, StaticVaultsListModule],
})
export class UserViewModule {}
