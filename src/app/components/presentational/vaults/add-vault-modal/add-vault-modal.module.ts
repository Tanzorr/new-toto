import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVaultModalComponent } from './add-vault-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { CustomInputModule } from '../../../libs/custom-input/custom-input.module';
import { CustomTextareaModule } from '../../../libs/custom-textarea/custom-textarea.module';

@NgModule({
  declarations: [AddVaultModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormGroupModule,
    FormsModule,
    CustomInputModule,
    CustomTextareaModule,
  ],
  exports: [AddVaultModalComponent],
})
export class AddVaultModalModule {}
