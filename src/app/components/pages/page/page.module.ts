import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageRoutesModule } from './page-routes.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, PageRoutesModule],
})
export class PageModule {}
