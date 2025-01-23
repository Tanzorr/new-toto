import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPageEditComponent } from './info-page-edit.component';
import { InfoPageEditRoutesModule } from './info-page-edit-routes.module';

@NgModule({
  declarations: [InfoPageEditComponent],
  imports: [CommonModule, InfoPageEditRoutesModule],
})
export class InfoPageEditModule {}
