import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPasswordModalComponent } from './edit-password-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { CustomInputModule } from '../../../libs/input-text/custom-input.module';

@NgModule({
  declarations: [EditPasswordModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroupModule, CustomInputModule],
})
export class EditPasswordModalModule {}
