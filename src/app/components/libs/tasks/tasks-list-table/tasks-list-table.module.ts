import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListTableComponent } from './tasks-list-table.component';



@NgModule({
  declarations: [
    TasksListTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksListTableComponent
  ]
})
export class TasksListTableModule { }
