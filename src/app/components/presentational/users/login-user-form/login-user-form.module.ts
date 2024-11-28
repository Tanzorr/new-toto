import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserFormComponent } from './login-user-form.component';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginUserFormComponent],
  imports: [CommonModule, FormGroupModule, ReactiveFormsModule],
  exports: [LoginUserFormComponent],
})
export class LoginUserFormModule {}
