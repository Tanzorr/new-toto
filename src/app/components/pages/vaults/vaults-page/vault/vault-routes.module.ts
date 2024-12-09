import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VaultsComponent } from '../../vaults.component';
import { VaultComponent } from './vault.component';
import { PasswordsListComponent } from './passwords-list/passwords-list.component';
import { VaultSharedAccessComponent } from './vault-shared-access/vault-shared-access.component';

const routes: Routes = [
  {
    path: '',
    component: VaultComponent,
    children: [
      {
        path: 'passwords-list',
        component: PasswordsListComponent,
      },
      {
        path: 'shared-access',
        component: VaultSharedAccessComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultRoutesModule {}
