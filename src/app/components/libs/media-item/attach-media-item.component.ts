import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { Media } from '../../../models/media';

@Component({
  selector: 'app-attach-media-item',
  templateUrl: './attach-media-item.component.html',
  styleUrls: ['./attach-media-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachMediaItemComponent {
  @Input() media: Media | null = null;
  @Output() deleteMediaId = new EventEmitter<Media['id']>();
  @Output() attachMediaId = new EventEmitter<Media['id']>();
  @HostBinding('class') class =
    'card d-flex flex-column align-items-center gap-3 mb-3 p-1 shadow-sm';

  delete(id: Media['id'] | undefined): void {
    if (id) {
      this.deleteMediaId.emit(id);
    }
  }

  attach(id: Media['id'] | undefined) {
    if (id) {
      this.attachMediaId.emit(id);
    }
  }
}
