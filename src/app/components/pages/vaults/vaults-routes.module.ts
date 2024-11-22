import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VaultsComponent } from './vaults.component';

const routes: Routes = [
  {
    path: '',
    component: VaultsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./vaults-page/vaults-page.module').then((m) => m.VaultsPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultsRoutesModule {}
