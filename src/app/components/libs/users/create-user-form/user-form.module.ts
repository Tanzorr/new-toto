import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserFormComponent } from './create-user-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormGroupModule} from "../../form-group/form-group.module";
import {InputTextModule} from "../../input-text/input-text.module";

@NgModule({
  declarations: [
    CreateUserFormComponent
  ],
  exports: [
    CreateUserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormGroupModule,
    InputTextModule
  ]
})
export class UserFormModule { }
