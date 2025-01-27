import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInfoPageComponent } from './add-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddInfoPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInfoPageRoutesModule {}
