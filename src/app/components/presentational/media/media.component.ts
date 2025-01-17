import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaService } from './services/media.service';
import { Media } from '../../../models/media';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaComponent {
  medias$ = this.mediaService.medias$;

  @Input() entityType!: string;
  @Input() entityId!: string;

  constructor(private mediaService: MediaService) {
    this.mediaService.getMedias({ search: '' });
  }

  getSearchValue(searchValue: string): void {
    this.mediaService.getMedias({ search: searchValue });
  }

  handleFileInput($event: Event) {
    this.mediaService.addMedia(this.mediaService.prosedFormDataFile($event));
  }

  delete($event: Media['id']) {
    this.mediaService.deleteMedia($event);
  }

  attach($event: Media['id']) {
    this.mediaService.attachMedia($event, this.entityType, this.entityId);
  }
}
