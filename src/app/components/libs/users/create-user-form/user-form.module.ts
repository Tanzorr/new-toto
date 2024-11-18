import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserFormComponent } from './create-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../form-group/form-group.module';
import { CustomInputModule } from '../../input-text/custom-input.module';

@NgModule({
  declarations: [CreateUserFormComponent],
  exports: [CreateUserFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroupModule, CustomInputModule, FormsModule],
})
export class UserFormModule {}
