import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import {UsersListRoutingModule} from "./users-list-routing.module";
import {UsersListTableModule} from "../../../../libs/users/users-list-table/users-list-table.module";



@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    UsersListTableModule
  ]
})
export class UsersListModule { }
