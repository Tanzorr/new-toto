import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../../../../models/user';
import { EditUserService } from './services/edit-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediaComponent } from '../../../../../presentational/media/media.component';
import { Media } from '../../../../../../models/media';
import { Actions, ofType } from '@ngrx/effects';
import { addMediaSuccess } from '../../../../../../store/media/media-actions';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { EntityType } from '../../../../../../constans/entity-type';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent implements OnInit, OnDestroy {
  user$!: Observable<User>;
  private destroy$ = new Subject<void>();

  constructor(
    private editUserService: EditUserService,
    private modalService: NgbModal,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.user$ = this.editUserService.user$;
    this.actions$
      .pipe(ofType(addMediaSuccess), takeUntil(this.destroy$))
      .subscribe(() => this.editUserService.getUser());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateUser(user: User): void {
    this.editUserService.updateUser(user);
    this.editUserService.getUser();
  }

  selectMedia(entityId: string): void {
    const modalRef = this.modalService.open(MediaComponent, {
      size: 'lg',
      centered: true,
    });

    modalRef.componentInstance.entityType = EntityType.USER;
    modalRef.componentInstance.entityId = entityId;

    modalRef.result
      .then((result) => {
        console.log('Media selected:', result);
        this.editUserService.getUser();
      })
      .catch((error) => {
        console.error('Media modal dismissed:', error);
      });
  }

  detachMedia(mediaId: Media['id'], userId: User['id']): void {
    this.editUserService.detachMedia(EntityType.USER, userId, mediaId);
    this.editUserService.getUser();
  }

  getUser() {
    this.editUserService.getUser();
  }
}
