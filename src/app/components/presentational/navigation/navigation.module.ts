import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BackModule } from '../../libs/back/back.module';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive, BackModule],
})
export class NavigationModule {}
