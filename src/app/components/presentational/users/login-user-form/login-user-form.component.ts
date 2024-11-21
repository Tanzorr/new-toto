import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginData } from '../../../../models/ilogin-data';

@Component({
  selector: 'app-login-user-form',
  templateUrl: './login-user-form.component.html',
  styleUrls: ['./login-user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserFormComponent {
  loginForm: FormGroup;

  @Output() formSubmit: EventEmitter<ILoginData> = new EventEmitter<ILoginData>();

  errorMessages: { [key: string]: { [key: string]: string } } = {
    email: {
      required: 'Email is required.',
      email: 'Please enter a valid email address.',
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 6 characters long.',
    },
  };
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

    if (control?.touched && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return this.errorMessages[controlName][firstErrorKey];
    }

    return null;
  }
}
