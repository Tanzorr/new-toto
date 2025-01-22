import { PageState } from './page-reducers';

export const pageSelector = (state: PageState) => state.pageState.page;
