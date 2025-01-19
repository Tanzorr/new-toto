import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpinnerLoaderService } from './services/ui/spinner-loader.service';
import { User } from './models/user';
import { LocalStorageService } from './services/storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  userName: User['name'] = '';

  isLoading$ = this.loaderService.loader$;

  constructor(
    private loaderService: SpinnerLoaderService,
    private localStorageService: LocalStorageService
  ) {
    this.initializeUser();
  }

  private initializeUser(): void {
    const loggedUserString: string | null = this.localStorageService.get('logged_user');

    if (loggedUserString !== 'undefined' && loggedUserString !== null) {
      this.userName = JSON.parse(loggedUserString).name;
    }
  }
}
