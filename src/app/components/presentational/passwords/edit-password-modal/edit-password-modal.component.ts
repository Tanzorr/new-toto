import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Password } from '../../../../models/password';

@Component({
  selector: 'app-edit-password-modal',
  templateUrl: './edit-password-modal.component.html',
  styleUrls: ['./edit-password-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPasswordModalComponent {
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
      id: [''],
      name: [''],
      value: [''],
      description: [''],
      vault_id: [''],
    });
  }

  setPassData(passData: Password): void {
    if (passData) {
      this.passwordForm.patchValue(passData);
    }
  }

  savePassword(): void {
    if (this.passwordForm.valid && this.passwordForm.dirty) {
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
