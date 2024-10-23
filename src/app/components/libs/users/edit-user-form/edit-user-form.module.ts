import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditUserFormComponent} from "./edit-user-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    EditUserFormComponent
  ],
  exports: [
    EditUserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditUserFormModule { }
