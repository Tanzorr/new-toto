import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-info-pages',
  templateUrl: './users-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent {}
