import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { Media } from '../../../../models/media';

@Component({
  selector: 'app-attached-media-collection',
  templateUrl: './attached-media-collection.component.html',
  styleUrls: ['./attached-media-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachedMediaCollectionComponent {
  @Input() medias: Media[] | undefined;
  @Output() detachMediaId: EventEmitter<Media['id']> = new EventEmitter<Media['id']>();
  @HostBinding('class') class = 'd-flex flex-wrap gap-3';

  detachMedia(id: Media['id']) {
    if (id) {
      this.detachMediaId.emit(id);
    }
  }
}
