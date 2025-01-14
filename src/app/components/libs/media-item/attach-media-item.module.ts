import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttachMediaItemComponent } from './attach-media-item.component';
import { ImageModule } from '../image/image.module';
import { MediaControlModule } from '../media-control/media-control.module';

@NgModule({
  declarations: [AttachMediaItemComponent],
  imports: [CommonModule, ImageModule, MediaControlModule],
  exports: [AttachMediaItemComponent],
})
export class AttachMediaItemModule {}
