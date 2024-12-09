import { createAction, props } from '@ngrx/store';
import { Media, MediasResponse } from '../../models/media';
import { QueryParams } from '../../models/query-params';
export const getMedias = createAction('[Media] Get Medias', props<{ queryParams?: QueryParams }>());

export const getMediasSuccess = createAction(
  '[Media] Get Medias Success',
  props<{ value: Media[] }>()
);

export const getMediasFailure = createAction(
  '[Media] Get Medias Failure',
  props<{ value: string }>()
);

export const getMedia = createAction('[Media] Get Media', props<{ id: Media['id'] }>());

export const getMediaSuccess = createAction('[Media] Get Media Success', props<{ value: Media }>());

export const getMediaFailure = createAction(
  '[Media] Get Media Failure',
  props<{ value: string }>()
);

export const attachMedia = createAction(
  '[Media] Attach Media',
  props<{ entityType: string; entityId: number; mediaId: Media['id'] }>()
);

export const attachMediaSuccess = createAction(
  '[Media] Attach Media Success',
  props<{ value: string }>()
);

export const attachMediaFailure = createAction(
  '[Media] Attach Media Failure',
  props<{ value: string }>()
);

export const detachMedia = createAction(
  '[Media] Detach Media',
  props<{ entityType: string; entityId: number | string; mediaId: Media['id'] }>()
);

export const detachMediaSuccess = createAction(
  '[Media] Detach Media Success',
  props<{ value: string }>()
);

export const detachMediaFailure = createAction(
  '[Media] Detach Media Failure',
  props<{ value: string }>()
);

export const addMedia = createAction('[Media] Add Media', props<{ value: FormData }>());

export const addMediaSuccess = createAction('[Media] Add Media Success', props<{ value: any }>());

export const addMediaFailure = createAction(
  '[Media] Add Media Failure',
  props<{ value: string }>()
);

export const deleteMedia = createAction('[Media] Delete Media', props<{ id: Media['id'] }>());

export const deleteMediaSuccess = createAction(
  '[Media] Delete Media Success',
  props<{ id: Media['id'] }>()
);

export const deleteMediaFailure = createAction(
  '[Media] Delete Media Failure',
  props<{ value: string }>()
);
