import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Vault } from '../../../../models/vault';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-password-modal',
  templateUrl: './add-password-modal.component.html',
  styleUrls: ['./add-password-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPasswordModalComponent {
  passwordForm: FormGroup;

  errorMessage: { [key: string]: { [key: string]: string } } = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 12 characters long.',
    },
    value: {
      required: 'Value is required.',
      minlength: 'Value must be at least 12 characters long.',
    },
    description: {
      maxlength: 'Description must be at most 255 characters long.',
      minlength: 'Description must be at least 12 characters long.',
    },
  };
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.passwordForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      value: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.maxLength(255)]],
    });
  }

  savePassword(): void {
    if (this.passwordForm.valid) {
      this.activeModal.close(this.passwordForm.value);
    }
  }

  close() {
    this.activeModal.dismiss();
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.passwordForm.get(controlName);

    if (control?.touched && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return this.errorMessage[controlName][firstErrorKey];
    }
    return null;
  }
}
