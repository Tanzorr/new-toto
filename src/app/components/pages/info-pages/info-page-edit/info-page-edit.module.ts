import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPageEditComponent } from './info-page-edit.component';
import { InfoPageEditRoutesModule } from './info-page-edit-routes.module';
import { EditInfoModule } from '../../../presentational/info-pages/edit-info/edit-info.module';

@NgModule({
  declarations: [InfoPageEditComponent],
  imports: [CommonModule, InfoPageEditRoutesModule, EditInfoModule],
})
export class InfoPageEditModule {}
