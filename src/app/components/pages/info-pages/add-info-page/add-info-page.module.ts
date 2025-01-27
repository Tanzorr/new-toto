import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInfoPageComponent } from './add-info-page.component';
import { AddInfoPageRoutesModule } from './add-info-page-routes.module';
import { CreateInfoFormModule } from '../../../presentational/info-pages/add-info/create-info-form.module';

@NgModule({
  declarations: [AddInfoPageComponent],
  imports: [CommonModule, AddInfoPageRoutesModule, CreateInfoFormModule],
})
export class AddInfoPageModule {}
