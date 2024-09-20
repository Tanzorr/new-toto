import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./users-page/users-page.module').then(m => m.UsersPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./user-page/user-create/user-create.module').then(m => m.UserCreateModule)
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutesModule { }
