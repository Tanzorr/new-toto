import { Injectable } from '@angular/core';
import { userSelector } from '../../../../../../../store/users/users-selectors';
import { detachMedia } from '../../../../../../../store/media/media-actions';
import { Store } from '@ngrx/store';
import { getUser, updateUser } from '../../../../../../../store/users/users-actions';
import { User } from '../../../../../../../models/user';
import { UsersState } from '../../../../../../../store/users/users-reducers';
import { MediaState } from '../../../../../../../store/media/media-reducers';
import { Media } from '../../../../../../../models/media';

@Injectable({
  providedIn: 'root',
})
export class EditUserService {
  user$ = this.store.select(userSelector);

  constructor(
    private store: Store<UsersState>,
    private mediaStore: Store<MediaState>
  ) {}

  getUser(): void {
    this.store.dispatch(getUser());
  }

  updateUser(user: User): void {
    this.store.dispatch(updateUser({ user: user }));
  }

  detachMedia(type: string, typeId: string, mediaId: Media['id']): void {
    this.mediaStore.dispatch(detachMedia({ entityId: typeId, entityType: type, mediaId }));
  }
}
