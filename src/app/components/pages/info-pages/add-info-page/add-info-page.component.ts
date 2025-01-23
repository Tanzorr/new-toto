import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateInfoPage } from '../../../../models/infoPage';
import { AddInfoPageService } from './services/add-info-page.service';

@Component({
  selector: 'app-add-info-page',
  templateUrl: './add-info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddInfoPageComponent {
  constructor(private addInfoPageService: AddInfoPageService) {}
  onSubmit($event: CreateInfoPage) {
    this.addInfoPageService.addInfoPage($event);
  }
}
