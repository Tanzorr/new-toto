import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksListComponent} from "./tasks-list.component";
import {TasksListRoutingModule} from "./task-list-routing.module";
import {TasksListTableModule} from "../../../../libs/tasks/tasks-list-table/tasks-list-table.module";




@NgModule({
  declarations: [
    TasksListComponent
  ],
  imports: [
    CommonModule,
    TasksListRoutingModule,
    TasksListTableModule
  ]
})
export class TaskListModule { }
