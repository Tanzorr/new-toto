import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordListTableComponent } from './password-list-table.component';

@NgModule({
  declarations: [PasswordListTableComponent],
  imports: [CommonModule],
  exports: [PasswordListTableComponent],
})
export class PasswordsListTableModule {}
