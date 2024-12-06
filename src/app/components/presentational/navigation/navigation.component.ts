import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from '../../../services/storage/local-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  isLogged = true;
  loggedUserId!: string | null;
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {
    this.loggedUserId = JSON.parse(<string>this.localStorageService.get('logged_user')).id;
  }

  logout(): void {
    this.authService.logout();
  }

  protected readonly localStorage = localStorage;
}
