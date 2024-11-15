import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {UserPageComponent} from "./user-page.component";


const routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./user-view/user-view.module').then(m => m.UserViewModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
