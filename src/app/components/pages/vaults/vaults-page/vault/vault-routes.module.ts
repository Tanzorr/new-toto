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
        loadChildren: () =>
          import('./passwords-list/passwords-list.module').then((m) => m.PasswordsListModule),
      },
      {
        path: 'shared-access',
        loadChildren: () =>
          import('./vault-shared-access/vault-shared-access.module').then(
            (m) => m.VaultSharedAccessModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultRoutesModule {}
