import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultsPageComponent } from './vaults-page.component';
import { VaultsPageRoutesModule } from './vaults-page-routes.module';
import { VaultModule } from './vault/vault.module';
import { VaultsListComponent } from './vaults-list/vaults-list.component';

@NgModule({
  declarations: [VaultsPageComponent],
  imports: [CommonModule, VaultsPageRoutesModule, VaultModule, VaultsListComponent],
})
export class VaultsPageModule {}
