import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-info-pages',
  templateUrl: './info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent {
  @HostBinding('class') class = 'pt-4';
}
