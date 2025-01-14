import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { SpinnerLoaderService } from './services/ui/spinner-loader.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from './models/user';
import { LocalStorageService } from './services/storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  isLoading = true;
  userName: User['name'] = '';
  private destroy$ = new Subject<void>();

  constructor(
    private loaderService: SpinnerLoaderService,
    private localStorage: LocalStorageService
  ) {
    this.loaderService.loader$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
      this.isLoading = loading;
    });

    const loggedUser = this.localStorage.get('logged_user');

    if (loggedUser !== 'undefined' && loggedUser !== null) {
      this.userName = JSON.parse(<string>loggedUser).name;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
