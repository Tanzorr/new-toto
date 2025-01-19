import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MediaState } from '../../../../store/media/media-reducers';
import { selectMedias } from '../../../../store/media/media-selectors';
import {
  addMedia,
  getMedias,
  deleteMedia,
  attachMedia,
} from '../../../../store/media/media-actions';
import { QueryParams } from '../../../../models/query-params';
import { Media } from '../../../../models/media';
@Injectable({
  providedIn: 'root',
})
export class MediaService {
  formData = new FormData();
  medias$ = this.store.select(selectMedias);

  constructor(private store: Store<MediaState>) {}

  getMedias(queryParams?: QueryParams): void {
    this.store.dispatch(getMedias({ queryParams }));
  }

  addMedia(formData: FormData): void {
    this.store.dispatch(addMedia({ media: formData }));
  }

  deleteMedia(id: Media['id']): void {
    this.store.dispatch(deleteMedia({ id }));
  }

  attachMedia(mediaId: Media['id'], entityType: string, entityId: string): void {
    this.store.dispatch(attachMedia({ mediaId, entityType, entityId }));
  }

  prosedFormDataFile($event: Event): FormData {
    const input = $event.target as HTMLInputElement;
    const file = input.files?.item(0);
    const formData = new FormData();

    if (file) {
      formData.append('media', file);
    }

    return formData;
  }
}
