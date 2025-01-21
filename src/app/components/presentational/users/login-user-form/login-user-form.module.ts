import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserFormComponent } from './login-user-form.component';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInputModule } from '../../../libs/input-text/custom-input.module';

@NgModule({
  declarations: [LoginUserFormComponent],
  imports: [CommonModule, FormGroupModule, ReactiveFormsModule, CustomInputModule],
  exports: [LoginUserFormComponent],
})
export class LoginUserFormModule {}
