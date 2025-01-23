import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateInfoPage } from '../../../../models/infoPage';

@Component({
  selector: 'app-add-info-page',
  templateUrl: './add-info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddInfoPageComponent {
  onSubmit($event: CreateInfoPage) {}
}
