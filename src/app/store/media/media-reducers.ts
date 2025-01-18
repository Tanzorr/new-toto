import { createReducer, on } from '@ngrx/store';
import { Media } from '../../models/media';
import {
  deleteMediaSuccess,
  getMedias,
  getMediasFailure,
  getMediasSuccess,
  addMediaSuccess,
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

const setErrorMessage = (state: MediaStateModel, errorMessage: string): MediaStateModel => ({
  ...state,
  errorMessage,
  loading: false,
});

export const mediaReducer = createReducer(
  initialState,

  on(getMedias, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
  })),
  on(getMediasSuccess, (state, { medias }) => ({
    ...state,
    medias,
    loading: false,
  })),

  on(addMediaSuccess, (state) => ({
    ...state,
    loading: false,
  })),

  on(deleteMediaSuccess, (state, { id }) => ({
    ...state,
    medias: state.medias.filter((media) => media.id !== id),
    loading: false,
  })),

  on(getMediasFailure, (state, { error }) => setErrorMessage(state, error))
);
