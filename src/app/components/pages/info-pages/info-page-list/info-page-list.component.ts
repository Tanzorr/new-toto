import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoPage } from '../../../../models/infoPage';
import { InfoPagesListService } from './services/info-pages-list.service';
import { Columns } from '../../../../models/columns';
import { User } from '../../../../models/user';
import { LocalStorageService } from '../../../../services/storage/local-storage.service';
import { ModalService } from '../../../../services/ui/modal.service';
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
    private storageService: LocalStorageService,
    private _modalService: ModalService
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
    this._modalService
      .openModal({
        title: 'Delete page',
        body: 'Are you sure you want to delete this page?',
        confirmButtonText: 'Delete',
        confirmButtonClass: 'btn-danger',
        cancelButtonText: 'Cancel',
        cancelButtonClass: 'btn-success',
      })
      .then((result: boolean) => {
        if (result) {
          this.infoPagesListsService.deletePage(id);
        }
      })
      .catch((error: number) => {
        console.log('Error:', error);
      });
  }
}
