import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageListComponent } from './info-page-list.component';

const routes: Routes = [
  {
    path: '',
    component: InfoPageListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageListRoutingModule {}
