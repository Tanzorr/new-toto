import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { MediaService } from '../../services/api/media.service';
import { catchError, map, switchMap, finalize } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MediaState } from './media-reducers';
import {
  getMediasFailure,
  deleteMedia,
  deleteMediaSuccess,
  getMedias,
  getMediasSuccess,
  addMedia,
  addMediaSuccess,
  attachMedia,
  detachMedia,
} from './media-actions';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { PaginatedMediasResponse } from '../../models/media';
import { EntityMediaService } from '../../services/api/entity-media.service';
import { UsersState } from '../users/users-reducers';
import { getUser } from '../users/users-actions';
import { ErrorResponse } from '../../models/error-message';

@Injectable()
export class MediaEffects {
  constructor(
    private actions$: Actions,
    private mediaService: MediaService,
    private entityMediaService: EntityMediaService,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService,
    private store: Store<MediaState>,
    private usersStore: Store<UsersState>
  ) {}

  // Utility function to handle spinner and errors
  private withSpinner<T>(source$: Observable<T>): Observable<T> {
    this.spinnerLoaderService.show();
    return source$.pipe(finalize(() => this.spinnerLoaderService.hide()));
  }

  private handleError(error: ErrorResponse, defaultMessage = 'An error occurred'): Observable<any> {
    const errorMessage = error.message || defaultMessage;
    this.serverErrorDisplayService.displayError(errorMessage);
    return of(getMediasFailure({ error: errorMessage }));
  }

  getMedias$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMedias),
      switchMap((action) =>
        this.withSpinner(
          this.mediaService.getMedias(action.queryParams).pipe(
            map((mediaData: PaginatedMediasResponse) =>
              getMediasSuccess({ medias: mediaData.data })
            ),
            catchError((error: ErrorResponse) => this.handleError(error))
          )
        )
      )
    )
  );

  addMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMedia),
      switchMap((action) =>
        this.withSpinner(
          this.mediaService.addMedia(action.media).pipe(
            map(() => {
              this.store.dispatch(getMedias({}));
              return addMediaSuccess();
            }),
            catchError((error: ErrorResponse) => this.handleError(error, 'Failed to add media'))
          )
        )
      )
    )
  );

  deleteMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteMedia),
      switchMap((action) =>
        this.withSpinner(
          this.mediaService.deleteMedia(action.id).pipe(
            map(() => deleteMediaSuccess({ id: action.id })),
            catchError((error: ErrorResponse) => this.handleError(error, 'Failed to delete media'))
          )
        )
      )
    )
  );

  attachMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(attachMedia),
      switchMap((action) =>
        this.withSpinner(
          this.entityMediaService
            .attachMedia(action.entityType, action.entityId, action.mediaId)
            .pipe(
              map(() => {
                this.usersStore.dispatch(getUser());
                return addMediaSuccess();
              }),
              catchError((error: ErrorResponse) =>
                this.handleError(error, 'Failed to attach media')
              )
            )
        )
      )
    )
  );

  detachMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(detachMedia),
      switchMap((action) =>
        this.withSpinner(
          this.entityMediaService
            .detachMedia(action.entityType, action.entityId, action.mediaId)
            .pipe(
              map(() => addMediaSuccess()),
              catchError((error: ErrorResponse) =>
                this.handleError(error, 'Failed to detach media')
              )
            )
        )
      )
    )
  );
}
