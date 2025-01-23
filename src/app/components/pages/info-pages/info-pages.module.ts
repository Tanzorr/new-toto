import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPageComponent } from './info-page.component';
import { InfoPagesRoutesModule } from './info-pages-routes.module';

@NgModule({
  declarations: [InfoPageComponent],
  imports: [CommonModule, InfoPagesRoutesModule],
})
export class InfoPagesModule {}
