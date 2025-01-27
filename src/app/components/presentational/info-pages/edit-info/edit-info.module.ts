import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInfoComponent } from './edit-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { CustomInputModule } from '../../../libs/custom-input/custom-input.module';
import { CustomTextareaModule } from '../../../libs/custom-textarea/custom-textarea.module';

@NgModule({
  declarations: [EditInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormGroupModule,
    CustomInputModule,
    CustomTextareaModule,
  ],
  exports: [EditInfoComponent],
})
export class EditInfoModule {}
