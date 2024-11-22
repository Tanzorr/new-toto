import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticVaultsListComponent } from './static-vaults-list.component';

@NgModule({
  declarations: [StaticVaultsListComponent],
  imports: [CommonModule],
  exports: [StaticVaultsListComponent],
})
export class StaticVaultsListModule {}
