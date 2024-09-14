import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "../users.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    loadChildren: () => import('./users-list/users-list.module').then(m => m.UsersListModule)
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
export class UsersPageRoutingModule {
}
