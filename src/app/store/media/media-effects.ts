import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { MediaService } from '../../services/api/media.service';
import { catchError, map, switchMap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MediaState } from './media-reducers';
import {
  getMediaFailure,
  deleteMedia,
  deleteMediaFailure,
  deleteMediaSuccess,
  getMedias,
  getMediasSuccess,
  addMedia,
  addMediaSuccess,
  attachMediaFailure,
  attachMedia,
  detachMedia,
} from './media-actions';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { MediaResponse, PaginatedMediasResponse } from '../../models/media';
import { EntityMediaService } from '../../services/api/entity-media.service';

@Injectable()
export class MediaEffects {
  getMedias$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getMedias),
        switchMap((action) => {
          return this.mediaService.getMedias(action.queryParams).pipe(
            map((mediaData: PaginatedMediasResponse) =>
              getMediasSuccess({ value: mediaData.data })
            ),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(getMediaFailure({ value: error }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
          );
        })
      ),
    { dispatch: true }
  );

  addMedia$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addMedia),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.mediaService.addMedia(action.value).pipe(
            map(() => {
              this.store.dispatch(getMedias({}));
              return addMediaSuccess({ value: action.value });
            }),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.error.message);
              return of(attachMediaFailure({ value: error }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
          );
        })
      ),
    { dispatch: true }
  );

  deleteMedia$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteMedia),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.mediaService.deleteMedia(action.id).pipe(
            map(() => {
              return deleteMediaSuccess({ id: action.id });
            }),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.error.message);
              return of(deleteMediaFailure({ value: error }));
            }),
            finalize(() => this.spinnerLoaderService.hide())
          );
        })
      ),
    { dispatch: true }
  );

  attachMedia$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(attachMedia),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.entityMediaService
            .attachMedia(action.entityType, action.entityId, action.mediaId)
            .pipe(
              map(() => {
                location.reload();
                return addMediaSuccess({ value: action.mediaId });
              }),
              catchError((error: any) => {
                this.serverErrorDisplayService.displayError(error.error.message);
                return of(attachMediaFailure({ value: error }));
              }),
              finalize(() => this.spinnerLoaderService.hide())
            );
        })
      ),
    { dispatch: true }
  );

  detachMedia$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(detachMedia),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          return this.entityMediaService
            .detachMedia(action.entityType, action.entityId, action.mediaId)
            .pipe(
              map(() => {
                return addMediaSuccess({ value: action.mediaId });
              }),
              catchError((error: any) => {
                this.serverErrorDisplayService.displayError(error.error.message);
                return of(attachMediaFailure({ value: error }));
              }),
              finalize(() => this.spinnerLoaderService.hide())
            );
        })
      ),
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private mediaService: MediaService,
    private entityMediaService: EntityMediaService,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService,
    private store: Store<MediaState>
  ) {}
}
