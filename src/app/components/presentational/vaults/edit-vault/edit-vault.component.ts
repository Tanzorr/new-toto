import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Vault } from '../../../../models/vault';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-vault',
  templateUrl: './edit-vault.component.html',
  styleUrls: ['./edit-vault.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditVaultComponent {
  vaultForm: FormGroup;
  _vaultData: Vault | null = null;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  errorMessage: { [key: string]: { [key: string]: string } } = {
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
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(255)]],
      user_id: [''],
    });
  }

  set vaultData(vault: Vault) {
    if (vault) {
      this.vaultForm.patchValue(vault);
    }
  }

  saveVault() {
    if (this.vaultForm.valid && this.vaultForm.dirty) {
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
      return this.errorMessage[controlName][firstErrorKey];
    }
    return null;
  }
}
