import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InfoPageEditService } from './services/info-page-edit.service';
import { InfoPage } from '../../../../models/infoPage';

@Component({
  selector: 'app-info-page-edit',
  templateUrl: './info-page-edit.component.html',
  styleUrls: ['./info-page-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageEditComponent {
  infoPage$ = this.infoPageEditService.infoPage$;
  constructor(private infoPageEditService: InfoPageEditService) {
    this.infoPageEditService.getInfoPage();
  }

  onSubmit(infoPage: InfoPage): void {
    this.infoPageEditService.updateInfoPage(infoPage);
  }
}
