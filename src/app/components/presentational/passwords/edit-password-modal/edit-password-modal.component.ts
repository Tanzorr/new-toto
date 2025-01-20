import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Password } from '../../../../models/password';
import { passwordErrorMessages } from '../../../../constans/error-messages';

@Component({
  selector: 'app-edit-password-modal',
  templateUrl: './edit-password-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPasswordModalComponent {
  passwordForm: FormGroup;

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

  close(): void {
    this.activeModal.dismiss();
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.passwordForm.get(controlName);

    if (control?.dirty && control?.errors) {
      const firstErrorKey: string = Object.keys(control.errors)[0];
      return passwordErrorMessages[controlName][firstErrorKey];
    }
    return null;
  }
}
