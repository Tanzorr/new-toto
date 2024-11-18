import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { SpinnerLoaderService } from './services/lodesrs/spinner-loader.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  isLoading = true;
  private destroy$ = new Subject<void>();

  constructor(private loaderService: SpinnerLoaderService) {
    this.loaderService.loader$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
      this.isLoading = loading;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
