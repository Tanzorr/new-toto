import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPageComponent } from './info-page.component';
import { InfoPageRoutesModule } from './info-page-routes.module';

@NgModule({
  declarations: [InfoPageComponent],
  imports: [CommonModule, InfoPageRoutesModule],
})
export class InfoPageModule {}
