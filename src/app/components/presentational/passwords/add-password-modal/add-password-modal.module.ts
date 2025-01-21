import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPasswordModalComponent } from './add-password-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { CustomInputModule } from '../../../libs/input-text/custom-input.module';

@NgModule({
  declarations: [AddPasswordModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroupModule, CustomInputModule],
})
export class AddPasswordModalModule {}
