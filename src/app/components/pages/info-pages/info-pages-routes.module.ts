import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from './info-page.component';

const routes: Routes = [
  {
    path: '',
    component: InfoPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./info-page-list/info-page-list.module').then((m) => m.InfoPageListModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./info-page/info-page.module').then((m) => m.InfoPageModule),
      },
      {
        path: ':id/edit',
        loadChildren: () =>
          import('./info-page-edit/info-page-edit.module').then((m) => m.InfoPageEditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPagesRoutesModule {}
