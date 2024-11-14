import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListTableComponent } from './users-list-table.component';
import {RouterLink} from "@angular/router";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UsersListTableComponent
  ],
  exports: [
    UsersListTableComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbPagination,
    PaginationModule,
    FormsModule
  ]
})
export class UsersListTableModule { }
