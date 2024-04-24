import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksComponent} from "./tasks.component";
import {from} from "rxjs";
import {TasksPageModule} from "./tasks-page/tasks-page.module";


const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./tasks-page/tasks-page.module').then(m => m.TasksPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
  export class TasksRoutingModule {
  }
