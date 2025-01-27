import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTextareaComponent } from './custom-textarea.component';

@NgModule({
  declarations: [CustomTextareaComponent],
  exports: [CustomTextareaComponent],
  imports: [CommonModule],
})
export class CustomTextareaModule {}
