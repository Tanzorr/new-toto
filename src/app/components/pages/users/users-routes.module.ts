import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,  // Батьківський компонент для вкладених маршрутів
    children: [
      {
        path: '',  // Маршрут за замовчуванням для списку користувачів
        loadChildren: () => import('./users-page/users-page.module').then(m => m.UsersPageModule),
      },
      {
        path: ':id',  // Маршрут за замовчуванням для списку користувачів
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutesModule {}
