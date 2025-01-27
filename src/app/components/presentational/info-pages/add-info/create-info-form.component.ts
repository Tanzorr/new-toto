import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateInfoPage } from '../../../../models/infoPage';
import { infoPageErrorMessages } from '../../../../constans/error-messages';

@Component({
  selector: 'app-create-info-form',
  templateUrl: './create-info-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateInfoFormComponent {
  @Output() formSubmit = new EventEmitter<CreateInfoPage>();
  infoForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    content: ['', [Validators.required, Validators.minLength(12)]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.isCanSubmit()) {
      this.formSubmit.emit(this.infoForm.value as CreateInfoPage);
    }
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.infoForm.get(controlName);
    if (control?.dirty && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return infoPageErrorMessages[controlName][firstErrorKey];
    }
    return null;
  }

  isCanSubmit(): boolean {
    return this.infoForm.valid && this.infoForm.touched;
  }
}
