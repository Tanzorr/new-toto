import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultSharedAccessComponent } from './vault-shared-access.component';
import { VaultSharedAccessRoutesModule } from './vault-shared-access-routes.module';

@NgModule({
  declarations: [VaultSharedAccessComponent],
  imports: [CommonModule, VaultSharedAccessRoutesModule],
})
export class VaultSharedAccessModule {}
