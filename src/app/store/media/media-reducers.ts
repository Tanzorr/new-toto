import { createReducer, on } from '@ngrx/store';
import { Media } from '../../models/media';
import {
  deleteMediaFailure,
  deleteMediaSuccess,
  getMediasFailure,
  getMediasSuccess,
  addMediaSuccess,
  addMediaFailure,
} from './media-actions';

export interface MediaStateModel {
  medias: Media[];
  errorMessage: string;
  loading: boolean;
}

export interface MediaState {
  mediaState: MediaStateModel;
}

const initialState: MediaStateModel = {
  medias: [],
  errorMessage: '',
  loading: false,
};

export const mediaReducer = createReducer(
  initialState,
  on(getMediasSuccess, (state, { value }) => ({
    ...state,
    medias: value,
  })),
  on(getMediasFailure, (state, { value }) => ({
    ...state,
    errorMessage: value,
  })),
  on(addMediaSuccess, (state, { value }) => ({
    ...state,
    medias: [value, ...state.medias],
  })),
  on(addMediaFailure, (state, { value }) => ({
    ...state,
    errorMessage: value,
  })),
  on(deleteMediaSuccess, (state, { id }) => ({
    ...state,
    medias: state.medias.filter((media) => media.id !== id),
  })),
  on(deleteMediaFailure, (state, { value }) => ({
    ...state,
    errorMessage: value,
  }))
);
