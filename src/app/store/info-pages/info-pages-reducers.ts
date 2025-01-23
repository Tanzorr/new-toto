import { createReducer, on } from '@ngrx/store';
import {
  addPageFailure,
  addPageSuccess,
  deletePageFailure,
  deletePageSuccess,
  getPageFailure,
  getPagesSuccess,
  getPageSuccess,
  updatePageFailure,
  updatePageSuccess,
} from './info-pages-actions';
import { InfoPage } from '../../models/infoPage';

export interface PageStateModule {
  page: InfoPage;
  pages: InfoPage[];
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
  pages: [],
  errorMessage: '',
};

export const pageReducer = createReducer(
  initialState,
  on(getPagesSuccess, (state, { pages }) => ({
    ...state,
    pages,
  })),

  on(getPageFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),

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
  })),

  on(deletePageSuccess, (state, { id }) => ({
    ...state,
    pages: state.pages.filter((page) => page.id !== id),
  })),

  on(deletePageFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  }))
);
