import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AttachMediaCollectionComponent } from './attach-media-collection.component';
import { AttachMediaItemModule } from '../../../libs/media-item/attach-media-item.module';
import { ScrollableModule } from '../../../libs/scrollable/scrollable.module';
import { SearchModule } from '../../../libs/search/search.module';

@NgModule({
  declarations: [AttachMediaCollectionComponent],
  imports: [CommonModule, NgOptimizedImage, AttachMediaItemModule, ScrollableModule, SearchModule],
  exports: [AttachMediaCollectionComponent],
})
export class AttachMediaCollectionModule {}
