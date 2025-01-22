import { createReducer, on } from '@ngrx/store';
import {
  addPageFailure,
  addPageSuccess,
  deletePage,
  deletePageSuccess,
  getPageFailure,
  getPageSuccess,
  updatePageFailure,
  updatePageSuccess,
} from './page-actions';
import { Page } from '../../models/page';

export interface PageStateModule {
  page: Page;
  errorMessage: string;
}

export interface PageState {
  pageState: PageStateModule;
}

export const initialState: PageStateModule = {
  page: {
    id: '',
    title: '',
    content: '',
  },
  errorMessage: '',
};

export const pageReducer = createReducer(
  initialState,
  on(getPageSuccess, (state, { page }) => ({
    ...state,
    page: page,
  })),

  on(getPageFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),

  on(addPageSuccess, (state, { page }) => ({
    ...state,
    page: page,
  })),

  on(addPageFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),

  on(updatePageSuccess, (state, { page }) => ({
    ...state,
    page: page,
  })),

  on(updatePageFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  }))
);
