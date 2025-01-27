import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateInfoFormComponent } from './create-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputModule } from '../../../libs/custom-input/custom-input.module';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { CustomTextareaModule } from '../../../libs/custom-textarea/custom-textarea.module';

@NgModule({
  declarations: [CreateInfoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomInputModule,
    FormGroupModule,
    CustomTextareaModule,
  ],
  exports: [CreateInfoFormComponent],
})
export class CreateInfoFormModule {}
