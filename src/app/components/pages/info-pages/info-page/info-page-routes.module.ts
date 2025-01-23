import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from './info-page.component';

const routes: Routes = [
  {
    path: '',
    component: InfoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageRoutesModule {}
