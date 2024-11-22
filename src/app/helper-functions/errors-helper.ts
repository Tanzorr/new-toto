import { ErrorMessages } from '../models/error-message';
import { AbstractControl } from '@angular/forms';

export function getErrorMessageProsed(control: any, errorMessages: ErrorMessages): any {
  if (control.touched && control.errors) {
    const firstErrorKey = Object.keys(control.errors)[0];
    return errorMessages[firstErrorKey];
  }
  return null;
}
