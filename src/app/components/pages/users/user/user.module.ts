import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutesModule} from "./user.routes.module";
import {UserComponent} from "./user.component";



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutesModule
  ]
})
export class UserModule { }
