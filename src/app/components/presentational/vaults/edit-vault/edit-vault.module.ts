import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditVaultComponent } from './edit-vault.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';

@NgModule({
  declarations: [EditVaultComponent],
  imports: [CommonModule, ReactiveFormsModule, FormGroupModule],
})
export class EditVaultModule {}
