import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login.component';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { LoginUserFormModule } from '../../../../../presentational/users/login-user-form/login-user-form.module';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [CommonModule, UserLoginRoutingModule, LoginUserFormModule],
})
export class UserLoginModule {}
