import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VaultsComponent } from '../../vaults.component';
import { VaultComponent } from './vault.component';

const routes: Routes = [
  {
    path: '',
    component: VaultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultRoutesModule {}
