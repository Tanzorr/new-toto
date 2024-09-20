import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListTableComponent } from './users-list-table.component';



@NgModule({
  declarations: [
    UsersListTableComponent
  ],
  exports: [
    UsersListTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersListTableModule { }
