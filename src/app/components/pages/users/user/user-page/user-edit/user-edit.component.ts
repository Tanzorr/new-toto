import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../../../../models/user';
import { EditUserService } from './services/edit-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediaComponent } from '../../../../../presentational/media/media.component';
import { Media } from '../../../../../../models/media';
import { Actions, ofType } from '@ngrx/effects';
import { addMediaSuccess } from '../../../../../../store/media/media-actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { EntityType } from '../../../../../../constans/entity-type';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent implements OnInit, OnDestroy {
  user!: User;
  private destroy$ = new Subject<void>();

  constructor(
    private editUserService: EditUserService,
    private modalService: NgbModal,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.editUserService.user$;

    this.actions$
      .pipe(ofType(addMediaSuccess), takeUntil(this.destroy$))
      .subscribe(() => this.refreshUser());
    this.editUserService.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateUser(user: User): void {
    this.editUserService.updateUser(user);
    this.refreshUser();
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
      })
      .catch((error) => {
        console.error('Media modal dismissed:', error);
      });
  }

  detachMedia(mediaId: Media['id']): void {
    this.editUserService.detachMedia(EntityType.USER, this.user.id, mediaId);
    this.refreshUser();
  }

  private refreshUser(): void {
    this.editUserService.getUser();
  }
}
