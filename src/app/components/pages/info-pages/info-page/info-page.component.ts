import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent {
  infoPage$ = this.infoPageService.infoPage$;
  constructor(private infoPageService: InfoPageService) {
    this.infoPageService.getInfoPage();
  }
}
