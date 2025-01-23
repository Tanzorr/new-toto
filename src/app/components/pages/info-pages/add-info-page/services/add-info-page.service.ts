import { Injectable } from '@angular/core';
import { PageState } from '../../../../../store/info-pages/info-pages-reducers';
import { Store } from '@ngrx/store';
import { CreateInfoPage, InfoPage } from '../../../../../models/infoPage';
import { addPage } from '../../../../../store/info-pages/info-pages-actions';

@Injectable({
  providedIn: 'root',
})
export class AddInfoPageService {
  constructor(private store: Store<PageState>) {}

  addInfoPage(pageData: CreateInfoPage): void {
    this.store.dispatch(addPage({ page: pageData }));
  }
}
