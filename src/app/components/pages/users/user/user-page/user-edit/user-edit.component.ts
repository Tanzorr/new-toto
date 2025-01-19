import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../../../models/user';
import { EditUserService } from './services/edit-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediaComponent } from '../../../../../presentational/media/media.component';
import { EntityType } from '../../../../../../constans/entity-type';
import { Media } from '../../../../../../models/media';
import { Actions, ofType } from '@ngrx/effects';
import { addMediaSuccess } from '../../../../../../store/media/media-actions';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent implements OnInit {
  type = EntityType.USER;
  user!: User;
  user$: Observable<User>;

  constructor(
    private editUserService: EditUserService,
    private modalService: NgbModal,
    private actions$: Actions
  ) {
    this.user$ = this.editUserService.user$;
    this.editUserService.getUser();
  }

  ngOnInit(): void {
    this.actions$.pipe(ofType(addMediaSuccess)).subscribe(() => {
      this.editUserService.getUser();
    });
  }

  updateUser(user: User): void {
    this.editUserService.updateUser(user);
    this.editUserService.getUser();
  }

  getUser(user: User): void {
    this.user = user;
  }

  selectMedia(entityType: string, entityId: number): void {
    const modalRef = this.modalService.open(MediaComponent, {
      size: 'lg',
      centered: true,
    });

    modalRef.componentInstance.entityType = entityType;
    modalRef.componentInstance.entityId = entityId;

    modalRef.result
      .then((result) => {
        console.log('Modal result:', result);
      })
      .catch((error) => {
        console.error('Modal dismissed with error:', error);
      });
  }

  detachMedia(mediaId: Media['id']): void {
    if (this.user) {
      this.editUserService.detachMedia(this.type, this.user.id, mediaId);
      this.editUserService.getUser();
    }
  }
}
