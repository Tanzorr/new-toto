import { Injectable } from '@angular/core';
import { infoPagesSelector } from 'src/app/store/info-pages/info-pages-selectors';
import { PageState } from '../../../../../store/info-pages/info-pages-reducers';
import { Store } from '@ngrx/store';
import {
  addPage,
  getPage,
  updatePage,
  deletePage,
  getPages,
} from '../../../../../store/info-pages/info-pages-actions';
import { Page } from '../../../../../models/page';

@Injectable({
  providedIn: 'root',
})
export class InfoPagesListService {
  pages$ = this.store.select(infoPagesSelector);
  constructor(private store: Store<PageState>) {}

  getInfoPages(): void {
    this.store.dispatch(getPages());
  }

  addPage(pageData: Page): void {
    this.store.dispatch(addPage({ page: pageData }));
  }

  deletePage(id: Page['id']): void {
    this.store.dispatch(deletePage({ id }));
  }
}
