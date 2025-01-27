import { Injectable } from '@angular/core';
import { infoPagesSelector } from 'src/app/store/info-pages/info-pages-selectors';
import { PageState } from '../../../../../store/info-pages/info-pages-reducers';
import { Store } from '@ngrx/store';
import { deletePage, getPages } from '../../../../../store/info-pages/info-pages-actions';
import { InfoPage } from '../../../../../models/infoPage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoPagesListService {
  pages$: Observable<InfoPage[]> = this.store.select(infoPagesSelector);
  constructor(private store: Store<PageState>) {}

  getInfoPages(): void {
    this.store.dispatch(getPages());
  }

  deletePage(id: InfoPage['id']): void {
    this.store.dispatch(deletePage({ id }));
  }
}
