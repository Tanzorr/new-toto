import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Media } from '../../../../models/media';

@Component({
  selector: 'app-attach-media-collection',
  templateUrl: './attach-media-collection.component.html',
  styleUrls: ['./attach-media-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachMediaCollectionComponent {
  @Input() medias: Media[] | null = [];
  @Output() search = new EventEmitter<string>();
  @Output() deleteMediaId = new EventEmitter<Media['id']>();
  @Output() attachMediaId = new EventEmitter<Media['id']>();

  getSearch($event: string) {
    this.search.emit($event);
  }

  delete($event: Media['id']) {
    if ($event) {
      this.deleteMediaId.emit($event);
    }
  }

  attach($event: Media['id']) {
    if ($event) {
      this.attachMediaId.emit($event);
    }
  }
}
