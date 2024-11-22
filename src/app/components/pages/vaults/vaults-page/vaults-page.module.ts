import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultsPageComponent } from './vaults-page.component';
import { VaultsPageRoutesModule } from './vaults-page-routes.module';
import { VaultModule } from './vault/vault.module';

@NgModule({
  declarations: [VaultsPageComponent],
  imports: [CommonModule, VaultsPageRoutesModule, VaultModule],
})
export class VaultsPageModule {}
