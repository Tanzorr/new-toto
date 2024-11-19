import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { UserFormModule } from '../../../../../presentational/users/create-user-form/user-form.module';
import { EditUserFormModule } from '../../../../../presentational/users/edit-user-form/edit-user-form.module';

@NgModule({
  declarations: [UserEditComponent],
  imports: [CommonModule, UserEditRoutingModule, EditUserFormModule],
})
export class UserEditModule {}
