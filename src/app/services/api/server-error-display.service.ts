import { Injectable } from '@angular/core';
import { AlertService } from '../ui/alert.service';

@Injectable({
  providedIn: 'root',
})
export class ServerErrorDisplayService {
  constructor(private alert: AlertService) {}

  displayError(errorMessage: string) {
    this.alert.showAlert({
      type: 'danger',
      message: errorMessage,
      timeout: 5000,
    });
  }
}
