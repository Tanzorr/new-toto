import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent implements OnInit, OnDestroy {
  infoPage$ = this.infoPageService.infoPage$;
  private destroy$ = new Subject<void>();

  constructor(
    private infoPageService: InfoPageService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => this.infoPageService.getInfoPage(params['id']));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
