import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent implements OnInit {
  infoPage$ = this.infoPageService.infoPage$;
  private destroyRef = inject(DestroyRef);

  constructor(
    private infoPageService: InfoPageService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => this.infoPageService.getInfoPage(params['id']));
  }
}
