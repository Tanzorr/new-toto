import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from '../user-view/user-view.component';
import { UserEditComponent } from './user-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEditRoutingModule {}
