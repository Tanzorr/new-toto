import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultsComponent } from './vaults.component';
import { VaultsRoutesModule } from './vaults-routes.module';

@NgModule({
  declarations: [VaultsComponent],
  imports: [CommonModule, VaultsRoutesModule],
})
export class VaultsModule {}
