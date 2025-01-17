import { createAction, props } from '@ngrx/store';
import { Media } from '../../models/media';
import { QueryParams } from '../../models/query-params';

/**
 * Fetching medias
 */
export const getMedias = createAction('[Media] Get Medias', props<{ queryParams?: QueryParams }>());

export const getMediasSuccess = createAction(
  '[Media] Get Medias Success',
  props<{ medias: Media[] }>()
);

export const getMediasFailure = createAction(
  '[Media] Get Medias Failure',
  props<{ error: string }>()
);

/**
 * Media operations
 */
export const attachMedia = createAction(
  '[Media] Attach Media',
  props<{ entityType: string; entityId: string; mediaId: Media['id'] }>()
);

export const detachMedia = createAction(
  '[Media] Detach Media',
  props<{ entityType: string; entityId: string | number; mediaId: Media['id'] }>()
);

export const addMedia = createAction('[Media] Add Media', props<{ media: FormData }>());

export const addMediaSuccess = createAction('[Media] Add Media Success');

export const deleteMedia = createAction('[Media] Delete Media', props<{ id: Media['id'] }>());

export const deleteMediaSuccess = createAction(
  '[Media] Delete Media Success',
  props<{ id: Media['id'] }>()
);
