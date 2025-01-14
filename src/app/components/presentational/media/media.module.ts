import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { AttachMediaCollectionModule } from './attach-media-collection/attach-media-collection.module';
import { FormGroupModule } from '../../libs/form-group/form-group.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AttachFileModule } from '../../libs/attach-file/attach-file.module';
import { AttachedMediaCollectionComponent } from './attached-media-collection/attached-media-collection.component';
import { ImageModule } from '../../libs/image/image.module';
import { MediaControlModule } from '../../libs/media-control/media-control.module';

@NgModule({
  declarations: [MediaComponent, AttachedMediaCollectionComponent],
  imports: [
    CommonModule,
    AttachMediaCollectionModule,
    FormGroupModule,
    ReactiveFormsModule,
    AttachFileModule,
    ImageModule,
    MediaControlModule,
  ],
  exports: [AttachedMediaCollectionComponent],
})
export class MediaModule {}
