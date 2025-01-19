import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaultSharedAccessComponent } from './vault-shared-access.component';

const routes: Routes = [
  {
    path: '',
    component: VaultSharedAccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultSharedAccessRoutesModule {}
