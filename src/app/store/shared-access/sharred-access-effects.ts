import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SharedAccessService } from '../../services/api/shared-access.service';
import { SpinnerLoaderService } from '../../services/ui/spinner-loader.service';
import { ServerErrorDisplayService } from '../../services/api/server-error-display.service';
import { Store } from '@ngrx/store';
import { SharedAccessState } from './shared-access-reducers';
import {
  addSharedAccess,
  addSharedAccessFailure,
  addSharedAccessSuccess,
  deleteSharedAccess,
  deleteSharedAccessFailure,
  deleteSharedAccessSuccess,
  getNotAccessedUsers,
  getNotAccessedUsersFailure,
  getNotAccessedUsersSuccess,
  updateSharedAccess,
  updateSharedAccessFailure,
  updateSharedAccessSuccess,
} from './shared-access-actions';
import { catchError, finalize, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { routerSelector } from '../router/router-selector';
import { User } from '../../models/user';
import { EntityType } from '../../constans/entity-type';
import { UsersService } from '../../services/api/users.service';
import { SharedAccess } from '../../models/shared-access';
import { VaultsState } from '../valuts/vaults-reducers';
import { getVault } from '../valuts/vaults-actions';

@Injectable()
export class SharedAccessEffects {
  getNotAccessedUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getNotAccessedUsers),
        withLatestFrom(this.store.select(routerSelector)),
        switchMap((action) => {
          return this.usersApiService
            .getNotAccessedUsers(EntityType.VAULT, action[0].id, action[0].params)
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

  addAccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addSharedAccess),
        switchMap((action) => {
          return this.sharedApiAccessService.addSharedAccess(action.data).pipe(
            map((user: User) => {
              this.vaultStore.dispatch(getVault({ id: action.data.accessible_id }));
              this.store.dispatch(addSharedAccessSuccess({ accessUser: user }));
            }),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.error.message);
              return of(addSharedAccessFailure({ value: error.message }));
            }),
            finalize(() => {
              this.spinnerLoaderService.hide();
            })
          );
        })
      ),
    { dispatch: false }
  );

  updateAccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateSharedAccess),
        switchMap((action) => {
          return this.sharedApiAccessService.updateSharedAccess(action.value).pipe(
            map((access: SharedAccess) => {
              this.spinnerLoaderService.hide();
              this.store.dispatch(updateSharedAccessSuccess({ value: access }));
            }),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(updateSharedAccessFailure({ value: error.message }));
            }),
            finalize(() => {
              this.spinnerLoaderService.hide();
            })
          );
        })
      ),
    { dispatch: false }
  );

  deleteAccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteSharedAccess),
        switchMap((action) => {
          return this.sharedApiAccessService.deleteSharedAccess(action.value.shared_access_id).pipe(
            map(() => {
              this.spinnerLoaderService.hide();
              this.store.dispatch(deleteSharedAccessSuccess({ userId: action.value.id }));
            }),
            catchError((error: any) => {
              this.serverErrorDisplayService.displayError(error.message);
              return of(deleteSharedAccessFailure({ value: error.message }));
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
    private vaultStore: Store<VaultsState>,
    private sharedApiAccessService: SharedAccessService,
    private usersApiService: UsersService,
    private spinnerLoaderService: SpinnerLoaderService,
    private serverErrorDisplayService: ServerErrorDisplayService
  ) {}
}
