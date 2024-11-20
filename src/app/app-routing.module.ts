import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./components/pages/users/users.module').then((m) => m.UsersModule),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/pages/users/user/user-page/user-login/user-login.module').then(
        (m) => m.UserLoginModule
      ),
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
