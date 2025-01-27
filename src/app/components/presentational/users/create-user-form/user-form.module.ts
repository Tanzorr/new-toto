import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserFormComponent } from './create-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { CustomInputModule } from '../../../libs/custom-input/custom-input.module';

@NgModule({
  declarations: [CreateUserFormComponent],
  exports: [CreateUserFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroupModule, CustomInputModule, FormsModule],
})
export class UserFormModule {}
