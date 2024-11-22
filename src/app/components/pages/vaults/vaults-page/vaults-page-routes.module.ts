import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaultsPageComponent } from './vaults-page.component';

const routes: Routes = [
  {
    path: '',
    component: VaultsPageComponent,
    loadChildren: () => import('./vaults-list/vaults-list.module').then((m) => m.VaultsListModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultsPageRoutesModule {}
