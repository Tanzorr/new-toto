import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AlertData, AlertService } from './services/alert.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  alerts$!: Observable<AlertData[]>;

  constructor(private alertService: AlertService) {
    this.alerts$ = this.alertService.alerts$;
  }

  closeAlert(alert: AlertData) {
    this.alertService.dismissAlert(alert);
  }
}
