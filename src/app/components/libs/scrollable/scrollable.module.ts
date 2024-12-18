import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableDirective } from './scrollable.directive';

@NgModule({
  declarations: [ScrollableDirective],
  exports: [ScrollableDirective],
  imports: [CommonModule],
})
export class ScrollableModule {}
