import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVaultModalComponent } from './add-vault-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';

@NgModule({
  declarations: [AddVaultModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroupModule, FormsModule],
  exports: [AddVaultModalComponent],
})
export class AddVaultModalModule {}
