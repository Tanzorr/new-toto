import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserUpdateComponent } from './user-update/user-update.component';



@NgModule({
  declarations: [
    UserPageComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserPageModule { }
