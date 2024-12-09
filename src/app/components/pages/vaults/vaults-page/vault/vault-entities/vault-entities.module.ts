import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultEntitiesComponent } from './vault-entities.component';
import { VaultEntitiesRoutesModule } from './vault-entities-routes.module';

@NgModule({
  declarations: [VaultEntitiesComponent],
  imports: [CommonModule, VaultEntitiesRoutesModule],
  exports: [VaultEntitiesComponent],
})
export class VaultEntitiesModule {}
