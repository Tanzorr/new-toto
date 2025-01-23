import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from './info-page.component';

const routes: Routes = [
  {
    path: '',
    component: InfoPageComponent,
    loadChildren: () =>
      import('./info-page-edit/info-page-edit.module').then((m) => m.InfoPageEditModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageRoutesModule {}
