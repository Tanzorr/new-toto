import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaControlComponent } from './media-control.component';

@NgModule({
  declarations: [MediaControlComponent],
  exports: [MediaControlComponent],
  imports: [CommonModule],
})
export class MediaControlModule {}
