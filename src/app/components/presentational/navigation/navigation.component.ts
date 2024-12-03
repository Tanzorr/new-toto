import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { authService } from './services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  isLogged = true;
  constructor(private authService: authService) {}

  logout(): void {
    this.authService.logout();
  }

  protected readonly localStorage = localStorage;
}
