import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'tasks', loadChildren: () => import('./components/pages/tasks/tasks.module').then(m => m.TasksModule)},
  // {path: 'users/:id', loadChildren: () => import('./components/pages/user/user.module').then(m => m.UserModule)},
  {path: 'users', loadChildren: () => import('./components/pages/users/users.module').then(m => m.UsersModule)},
  {path: '', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
