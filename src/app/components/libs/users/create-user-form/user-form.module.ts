import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserFormComponent } from './create-user-form.component';
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    CreateUserFormComponent
  ],
  exports: [
    CreateUserFormComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class UserFormModule { }
