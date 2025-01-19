import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AlertData {
  type: 'success' | 'danger' | 'warning' | 'info';
  message: string;
  timeout?: number;
}
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  readonly alertsSubject$ = new BehaviorSubject<AlertData[]>([]);
  public alerts$ = this.alertsSubject$.asObservable();

  constructor() {}

  showAlert(alert: AlertData) {
    const currentAlerts = this.alertsSubject$.value;
    this.alertsSubject$.next([...currentAlerts, alert]);

    if (alert.timeout) {
      setTimeout(() => this.dismissAlert(alert), alert.timeout);
    }
  }

  dismissAlert(alert: AlertData) {
    const currentAlerts = this.alertsSubject$.value.filter((a) => a !== alert);
    this.alertsSubject$.next(currentAlerts);
  }
}
