import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SharedAccessService } from '../../services/api/shared-access.service';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { Store } from '@ngrx/store';
import { SharedAccessState } from './shared-access-reducers';
import {
  getNotAccessedUsers,
  getNotAccessedUsersFailure,
  getNotAccessedUsersSuccess,
} from './shared-access-actions';
import { catchError, finalize, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { routerSelector } from '../router/router-selector';

@Injectable()
export class SharedAccessEffects {
  getNotAccessedUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getNotAccessedUsers),
        withLatestFrom(this.store.select(routerSelector)),
        switchMap((action) => {
          this.spinnerLoaderService.show();
          console.log(action[0]);
          return this.sharedApiAccessService
            .getNotAccessedUsers(action[0].id, action[0].params)
            .pipe(
              map((usersData: any) => {
                this.spinnerLoaderService.hide();
                this.store.dispatch(getNotAccessedUsersSuccess({ value: usersData }));
              }),
              catchError((error: any) => {
                this.serverErrorDisplayService.displayError(error.message);
                return of(getNotAccessedUsersFailure({ value: error.message }));
              }),
              finalize(() => {
                this.spinnerLoaderService.hide();
              })
            );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<SharedAccessState>,
    private sharedApiAccessService: SharedAccessService,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService
  ) {}
}
