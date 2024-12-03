import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormGroupModule } from '../form-group/form-group.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormGroupModule, ReactiveFormsModule],
  exports: [SearchComponent],
})
export class SearchModule {}
