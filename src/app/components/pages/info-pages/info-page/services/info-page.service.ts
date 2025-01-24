import { Injectable } from '@angular/core';
import { infoPageSelector } from '../../../../../store/info-pages/info-pages-selectors';
import { Store } from '@ngrx/store';
import { PageState } from '../../../../../store/info-pages/info-pages-reducers';
import { getPage } from '../../../../../store/info-pages/info-pages-actions';
import { InfoPage } from '../../../../../models/infoPage';

@Injectable({
  providedIn: 'root',
})
export class InfoPageService {
  infoPage$ = this.store.select(infoPageSelector);
  constructor(private store: Store<PageState>) {}

  public getInfoPage(id: InfoPage['id']): void {
    this.store.dispatch(getPage({ id }));
  }
}
