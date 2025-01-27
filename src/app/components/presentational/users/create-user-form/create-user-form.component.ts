import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../models/user';
import { userErrorMessages } from '../../../../constans/error-messages';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserFormComponent {
  userForm: FormGroup;

  @Output() formSubmit: EventEmitter<User> = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.formSubmit.emit(this.userForm.value);
      this.userForm.reset();
    }
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.userForm.get(controlName);

    if (control?.dirty && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return userErrorMessages[controlName][firstErrorKey];
    }
    return null;
  }
}
