import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditVaultModalComponent } from './edit-vault-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';

@NgModule({
  declarations: [EditVaultModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroupModule],
})
export class EditVaultModalModule {}
