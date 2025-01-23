import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InfoPagesListService } from './info-page-list/services/info-pages-list.service';
import { Observable } from 'rxjs';
import { Page } from '../../../models/page';

@Component({
  selector: 'app-info-pages',
  templateUrl: './info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent {
  page$!: Observable<Page>;
  constructor() {}
}
