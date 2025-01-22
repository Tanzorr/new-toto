import { Injectable } from '@angular/core';
import { pageSelector } from 'src/app/store/page/page-selectors';
import { PageState } from '../../../../store/page/page-reducers';
import { Store } from '@ngrx/store';
import { addPage, getPage, updatePage, deletePage } from '../../../../store/page/page-actions';
import { Page } from '../../../../models/page';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  page$ = this.store.select(pageSelector);
  constructor(private store: Store<PageState>) {}

  addPage(pageData: Page): void {
    this.store.dispatch(addPage({ page: pageData }));
  }

  getPage(): void {
    this.store.dispatch(getPage());
  }

  updatePage(page: Page): void {
    this.store.dispatch(updatePage({ page }));
  }

  deletePage(id: Page['id']): void {
    this.store.dispatch(deletePage({ id }));
  }
}
