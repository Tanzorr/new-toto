import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageService } from './services/page.service';
import { Observable } from 'rxjs';
import { Page } from '../../../models/page';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  page$!: Observable<Page>;
  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.pageService.getPage();
    this.page$ = this.pageService.page$;
  }
}
