import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageEditComponent } from './info-page-edit.component';

const routes: Routes = [
  {
    path: '',
    component: InfoPageEditComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageEditRoutesModule {}
