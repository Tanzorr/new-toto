import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-info-pages',
  templateUrl: './user-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent {}
