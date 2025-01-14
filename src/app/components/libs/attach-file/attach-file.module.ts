import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttachFileComponent } from './attach-file.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AttachFileComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AttachFileComponent],
})
export class AttachFileModule {}
