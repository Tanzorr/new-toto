import { createAction, props } from '@ngrx/store';
import { InfoPage } from '../../models/infoPage';

export const getPages = createAction('[Page] Get Pages');

export const getPagesSuccess = createAction(
  '[Page] Get Pages Success',
  props<{ pages: InfoPage[] }>()
);

export const getPagesFailure = createAction('[Page] Get Pages Failure', props<{ error: string }>());
export const getPage = createAction('[Page] Get Page');

export const getPageSuccess = createAction('[Page] Get Page Success', props<{ page: InfoPage }>());

export const getPageFailure = createAction('[Page] Get Page Failure', props<{ error: string }>());

export const addPage = createAction('[Page] Add Page', props<{ page: InfoPage }>());

export const addPageSuccess = createAction('[Page] Add Page Success', props<{ page: InfoPage }>());

export const addPageFailure = createAction('[Page] Add Page Failure', props<{ error: string }>());

export const updatePage = createAction('[Page] Update Page', props<{ page: InfoPage }>());

export const updatePageSuccess = createAction(
  '[Page] Update Page Success',
  props<{ page: InfoPage }>()
);

export const updatePageFailure = createAction(
  '[Page] Update Page Failure',
  props<{ error: string }>()
);

export const deletePage = createAction('[Page] Delete Page', props<{ id: InfoPage['id'] }>());

export const deletePageSuccess = createAction(
  '[Page] Delete Page Success',
  props<{ id: InfoPage['id'] }>()
);

export const deletePageFailure = createAction(
  '[Page] Delete Page Failure',
  props<{ error: string }>()
);
