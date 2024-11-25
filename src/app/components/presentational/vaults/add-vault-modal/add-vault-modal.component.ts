import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vault-modal',
  templateUrl: './add-vault-modal.component.html',
  styleUrls: ['./add-vault-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddVaultModalComponent {
  vaultForm: FormGroup;

  errorMessages: { [key: string]: { [key: string]: string } } = {
    name: {
      required: 'Name is required.',
      maxlength: 'Name must be at most 50 characters long.',
    },
    description: {
      maxlength: 'Description must be at most 255 characters long.',
    },
  };
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.vaultForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(255)]],
    });
  }

  saveVault(): void {
    if (this.vaultForm.valid) {
      this.activeModal.close(this.vaultForm.value);
    }
  }

  close() {
    this.activeModal.dismiss();
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.vaultForm.get(controlName);

    if (control?.touched && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return this.errorMessages[controlName][firstErrorKey];
    }
    return null;
  }
}
