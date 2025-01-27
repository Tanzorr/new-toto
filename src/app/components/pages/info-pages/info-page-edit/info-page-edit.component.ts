import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InfoPageEditService } from './services/info-page-edit.service';
import { InfoPage } from '../../../../models/infoPage';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-info-page-edit',
  templateUrl: './info-page-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageEditComponent implements OnInit {
  infoPage$ = this.infoPageEditService.infoPage$;
  private destroyRef = inject(DestroyRef);
  constructor(
    private infoPageEditService: InfoPageEditService,
    private activeRoute: ActivatedRoute
  ) {}

  onSubmit(infoPage: InfoPage): void {
    this.infoPageEditService.updateInfoPage(infoPage);
  }

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => this.infoPageEditService.getInfoPage(params['id']));
  }
}
