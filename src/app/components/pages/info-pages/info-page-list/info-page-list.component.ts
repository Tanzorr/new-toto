import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoPage } from '../../../../models/infoPage';
import { InfoPagesListService } from './services/info-pages-list.service';
import { Columns } from '../../../../models/columns';
import { User } from '../../../../models/user';
import { LocalStorageService } from '../../../../services/storage/local-storage.service';
@Component({
  selector: 'app-info-page-list',
  templateUrl: './info-page-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageListComponent implements OnInit, AfterViewInit {
  loggedUser!: User;
  infoPages$!: Observable<InfoPage[]>;

  columns!: Columns[];

  constructor(
    private infoPagesListsService: InfoPagesListService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.infoPages$ = this.infoPagesListsService.pages$;
    this.infoPagesListsService.getInfoPages();
    this.loggedUser = JSON.parse(this.storageService.get('logged_user') || '{}');
  }

  ngAfterViewInit(): void {
    this.columns = [
      { header: 'title', field: 'title' },
      { header: 'Actions', template: true },
    ];
  }

  deletePageInfo(id: InfoPage['id']) {
    this.infoPagesListsService.deletePage(id);
  }
}
