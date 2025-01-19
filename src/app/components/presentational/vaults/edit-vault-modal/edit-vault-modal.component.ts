import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Vault } from '../../../../models/vault';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { vaultErrorMessages } from '../../../../constans/error-messages';

@Component({
  selector: 'app-edit-vault-modal',
  templateUrl: './edit-vault-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditVaultModalComponent {
  vaultForm: FormGroup;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

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
      return vaultErrorMessages[controlName][firstErrorKey];
    }
    return null;
  }
}
