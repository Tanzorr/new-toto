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

  addMedia(formData: FormData) {
    this.store.dispatch(addMedia({ value: formData }));
  }

  deleteMedia(id: Media['id']) {
    this.store.dispatch(deleteMedia({ id }));
  }

  attachMedia(mediaId: Media['id'], entityType: string, entityId: number) {
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
