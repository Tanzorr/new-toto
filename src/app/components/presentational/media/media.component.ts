import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaService } from './services/media.service';
import { Media } from '../../../models/media';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaComponent {
  medias$: Observable<Media[]> = this.mediaService.medias$;

  @Input() entityType!: string;
  @Input() entityId!: string;

  constructor(private mediaService: MediaService) {
    this.mediaService.getMedias({ search: '' });
  }

  getSearchValue(searchValue: string): void {
    this.mediaService.getMedias({ search: searchValue });
  }

  handleFileInput($event: Event): void {
    this.mediaService.addMedia(this.mediaService.prosedFormDataFile($event));
  }

  delete($event: Media['id']): void {
    this.mediaService.deleteMedia($event);
  }

  attach($event: Media['id']): void {
    this.mediaService.attachMedia($event, this.entityType, this.entityId);
  }
}
