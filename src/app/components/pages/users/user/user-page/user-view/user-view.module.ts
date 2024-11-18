import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view.component';
import { UserViewRoutingModule } from './user-view-routing.module';

@NgModule({
  declarations: [UserViewComponent],
  imports: [CommonModule, UserViewRoutingModule],
})
export class UserViewModule {}
