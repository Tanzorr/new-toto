import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { UserFormModule } from '../../../../../presentational/users/create-user-form/user-form.module';
import { EditUserFormModule } from '../../../../../presentational/users/edit-user-form/edit-user-form.module';
import { MediaModule } from '../../../../../presentational/media/media.module';
import { AttachMediaItemModule } from '../../../../../libs/media-item/attach-media-item.module';
import { ImageModule } from '../../../../../libs/image/image.module';
import { MediaControlModule } from '../../../../../libs/media-control/media-control.module';

@NgModule({
  declarations: [UserEditComponent],
  imports: [
    CommonModule,
    UserEditRoutingModule,
    EditUserFormModule,
    MediaModule,
    AttachMediaItemModule,
    ImageModule,
    MediaControlModule,
  ],
})
export class UserEditModule {}
