import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserFormComponent } from './edit-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';

@NgModule({
  declarations: [EditUserFormComponent],
  exports: [EditUserFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormGroupModule],
})
export class EditUserFormModule {}
