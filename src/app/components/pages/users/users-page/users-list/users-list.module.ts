import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListTableModule } from '../../../../presentational/users/users-list-table/users-list-table.module';
import { SearchModule } from '../../../../libs/search/search.module';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, UsersListRoutingModule, UsersListTableModule, SearchModule],
})
export class UsersListModule {}
