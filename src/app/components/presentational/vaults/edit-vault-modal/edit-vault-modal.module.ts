import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditVaultModalComponent } from './edit-vault-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { CustomInputModule } from '../../../libs/custom-input/custom-input.module';

@NgModule({
  declarations: [EditVaultModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroupModule, CustomInputModule],
})
export class EditVaultModalModule {}
