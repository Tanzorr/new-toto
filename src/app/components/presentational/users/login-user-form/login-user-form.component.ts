import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthLoginData } from '../../../../models/auth-login-data';
import { userErrorMessages } from '../../../../constans/error-messages';

@Component({
  selector: 'app-login-user-form',
  templateUrl: './login-user-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserFormComponent {
  loginForm: FormGroup;

  @Output() formSubmit: EventEmitter<AuthLoginData> = new EventEmitter<AuthLoginData>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.formSubmit.emit(this.loginForm.value);
    }
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.loginForm.get(controlName);

    if (control?.dirty && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return userErrorMessages[controlName][firstErrorKey];
    }

    return null;
  }
}
