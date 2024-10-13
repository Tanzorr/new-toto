import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create.component';
import {UserCreateRoutingModule} from "./user-create-routing.module";
import {UserFormModule} from "../../../../../libs/users/user-form/user-form.module";




@NgModule({
  declarations: [
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserCreateRoutingModule,
    UserFormModule
  ]
})
export class UserCreateModule { }
