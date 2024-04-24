import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksPageComponent } from "./tasks-page.component";



const routes: Routes = [
  {
    path: '',
    component: TasksPageComponent,
    loadChildren: () => import('./tasks-list/tasks-list.module').then(m => m.TaskListModule),
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksPageRoutingModule {
}
