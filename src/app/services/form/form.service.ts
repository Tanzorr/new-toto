import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  createFormData(form: FormGroup): FormData {
    const formData = new FormData();

    Object.keys(form.value).forEach((key) => {
      const value = form.get(key)?.value;

      if (key === 'image' && typeof value === 'string' && value.includes('http')) {
        return;
      }

      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    return formData;
  }
}
