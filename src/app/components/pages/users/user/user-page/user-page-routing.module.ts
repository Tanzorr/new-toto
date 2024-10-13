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
      },
      {
        path: 'edit',
        loadChildren: () => import('./user-edit/user-edit.module').then(m => m.UserEditModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
