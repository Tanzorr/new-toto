import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateInfoFormComponent } from './create-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputModule } from '../../../libs/input-text/custom-input.module';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';

@NgModule({
  declarations: [CreateInfoFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CustomInputModule, FormGroupModule],
  exports: [CreateInfoFormComponent],
})
export class CreateInfoFormModule {}
