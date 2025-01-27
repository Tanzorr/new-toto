import { PageState } from './info-pages-reducers';

export const infoPagesSelector = (state: PageState) => state.pageState.pages;
export const infoPageSelector = (state: PageState) => state.pageState.page;
