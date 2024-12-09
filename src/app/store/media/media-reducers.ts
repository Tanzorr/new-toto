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
  on(getMediasSuccess, (state, action) => {
    return {
      ...state,
      medias: action.value,
    };
  }),

  on(getMediasFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.value,
    };
  }),

  on(addMediaSuccess, (state, action) => {
    return {
      ...state,
      medias: [action.value, ...state.medias],
    };
  }),

  on(addMediaFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.value,
    };
  }),

  on(deleteMediaSuccess, (state, action) => {
    return {
      ...state,
      medias: state.medias.filter((media) => media.id !== action.id),
    };
  }),

  on(deleteMediaFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.value,
    };
  })
);
