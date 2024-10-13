import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListTableComponent } from './users-list-table.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    UsersListTableComponent
  ],
  exports: [
    UsersListTableComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class UsersListTableModule { }
