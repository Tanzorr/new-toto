import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VaultEntitiesComponent } from './vault-entities.component';

const routes: Routes = [
  {
    path: '',
    component: VaultEntitiesComponent,
    children: [
      {
        path: 'shared-access',
        loadChildren: () =>
          import('../vault-shared-access/vault-shared-access.module').then(
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
export class VaultEntitiesRoutesModule {}
