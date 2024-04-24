import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksListComponent} from "./tasks-list.component";
import {TasksListRoutingModule} from "./task-list-routing.module";




@NgModule({
  declarations: [
    TasksListComponent
  ],
  imports: [
    CommonModule,
    TasksListRoutingModule
  ]
})
export class TaskListModule { }
