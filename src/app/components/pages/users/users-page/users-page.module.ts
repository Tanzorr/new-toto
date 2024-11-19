import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import { UsersPageRoutingModule } from './users-page-routing.module';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [CommonModule, UsersPageRoutingModule],
})
export class UsersPageModule {}
