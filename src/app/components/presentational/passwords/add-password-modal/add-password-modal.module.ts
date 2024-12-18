import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPasswordModalComponent } from './add-password-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';

@NgModule({
  declarations: [AddPasswordModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroupModule],
})
export class AddPasswordModalModule {}
