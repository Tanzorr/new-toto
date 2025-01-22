import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PageState } from './page-reducers';
import { Router } from '@angular/router';
import { PageService } from '../../services/api/page.service';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { ServerError } from '../../models/server-error';
import { of } from 'rxjs';
import { catchError, finalize, map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  getPage,
  getPageFailure,
  getPageSuccess,
  addPage,
  addPageSuccess,
  addPageFailure,
  updatePage,
  updatePageSuccess,
  updatePageFailure,
  deletePage,
  deletePageSuccess,
  deletePageFailure,
} from './page-actions';
import { Page } from '../../models/page';
import { routerSelector } from '../router/router-selector';

@Injectable()
export class PageEffects {
  constructor(
    private actions$: Actions,
    private pageApiService: PageService,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService,
    private store: Store<PageState>
  ) {}

  private showSpinner = () => this.spinnerLoaderService.show();
  private hideSpinner = () => this.spinnerLoaderService.hide();

  private getPagesFail = (error: ServerError) => getPageFailure({ error: error.message });

  private handleError = (error: ServerError, actionFail: any) => {
    this.serverErrorDisplayService.displayError(error.message);
    return of(actionFail({ error: error.message }));
  };

  getPage = createEffect(() =>
    this.actions$.pipe(
      ofType(getPage),
      withLatestFrom(this.store.select(routerSelector)),
      switchMap(([action, route]) => {
        this.showSpinner();
        return this.pageApiService.getPage(route.state.params['id']).pipe(
          map((pagesData: Page) => getPageSuccess({ page: pagesData })),
          catchError((error: ServerError) => this.handleError(error, this.getPagesFail)),
          finalize(this.hideSpinner)
        );
      })
    )
  );

  addPage = createEffect(() =>
    this.actions$.pipe(
      ofType(addPage),
      switchMap((action) => {
        this.showSpinner();
        return this.pageApiService.addPage(action.page).pipe(
          map((page: Page) => addPageSuccess({ page })),
          catchError((error: ServerError) => this.handleError(error, addPageFailure)),
          finalize(this.hideSpinner)
        );
      })
    )
  );

  updatePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePage),
      switchMap((action) => {
        this.showSpinner();
        return this.pageApiService.updatePage(action.page).pipe(
          map((page: Page) => updatePageSuccess({ page })),
          catchError((error: ServerError) => this.handleError(error, updatePageFailure)),
          finalize(this.hideSpinner)
        );
      })
    )
  );

  deletePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePage),
      switchMap((action) => {
        this.showSpinner();
        return this.pageApiService.deletePage(action.id).pipe(
          map(() => deletePageSuccess({ id: action.id })),
          catchError((error: ServerError) => this.handleError(error, deletePageFailure)),
          finalize(this.hideSpinner)
        );
      })
    )
  );
}
