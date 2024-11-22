import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VaultsListComponent } from './vaults-list.component';

const routes: Routes = [
  {
    path: '',
    component: VaultsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultsListRoutesModule {}
