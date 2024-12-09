import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { SearchModule } from '../../../../libs/search/search.module';
import { TableModule } from '../../../../libs/table/table.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, UsersListRoutingModule, SearchModule, TableModule, PaginationModule],
})
export class UsersListModule {}
