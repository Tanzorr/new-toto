import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaultsPageComponent } from './vaults-page.component';

const routes: Routes = [
  {
    path: '',
    component: VaultsPageComponent,
    children: [
      {
        path: ':id',
        loadChildren: () => import('./vault/vault.module').then((m) => m.VaultModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultsPageRoutesModule {}
