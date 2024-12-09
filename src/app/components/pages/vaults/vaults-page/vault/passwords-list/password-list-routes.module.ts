import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordsListComponent } from './passwords-list.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordListRoutesModule {}
