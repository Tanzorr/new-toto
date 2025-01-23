import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../../../models/page';
import { InfoPagesListService } from './services/info-pages-list.service';
import { Columns } from '../../../../models/columns';
import { User } from '../../../../models/user';
@Component({
  selector: 'app-info-page-list',
  templateUrl: './info-page-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageListComponent implements OnInit, AfterViewInit {
  loggedUser!: User;
  infoPages$!: Observable<Page[]>;

  columns!: Columns[];

  constructor(private infoPagesListsService: InfoPagesListService) {}

  ngOnInit(): void {
    this.infoPages$ = this.infoPagesListsService.pages$;
    this.infoPagesListsService.getInfoPages();
  }

  ngAfterViewInit(): void {
    this.columns = [
      { header: 'title', field: 'title' },
      { header: 'Actions', template: true },
    ];
  }
}
