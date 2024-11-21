import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LogoutService } from './services/logout.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  isLogged = true;
  constructor(private logoutService: LogoutService) {}

  logout(): void {
    this.logoutService.logout();
  }

  protected readonly localStorage = localStorage;
}
