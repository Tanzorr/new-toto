import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./components/pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'vaults',
    loadChildren: () =>
      import('./components/pages/vaults/vaults.module').then((m) => m.VaultsModule),
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
