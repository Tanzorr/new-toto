import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { InfoPageEditService } from './services/info-page-edit.service';
import { InfoPage } from '../../../../models/infoPage';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-info-page-edit',
  templateUrl: './info-page-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageEditComponent implements OnInit, OnDestroy {
  infoPage$ = this.infoPageEditService.infoPage$;
  private destroy$ = new Subject<void>();
  constructor(
    private infoPageEditService: InfoPageEditService,
    private activeRoute: ActivatedRoute
  ) {}

  onSubmit(infoPage: InfoPage): void {
    this.infoPageEditService.updateInfoPage(infoPage);
  }

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => this.infoPageEditService.getInfoPage(params['id']));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
