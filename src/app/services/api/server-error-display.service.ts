import { Injectable } from '@angular/core';
import { AlertService } from '../../components/libs/alert/services/alert.service';

@Injectable({
  providedIn: 'root',
})
export class ServerErrorDisplayService {
  constructor(private alert: AlertService) {}

  displayError(errorMessage: string): void {
    this.alert.showAlert({
      type: 'danger',
      message: errorMessage,
      timeout: 5000,
    });
  }
}
