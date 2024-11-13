import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserCreateData} from "../../../../models/entities/User";


@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserFormComponent {
  userForm: FormGroup;

  @Output() formSubmit: EventEmitter<UserCreateData> = new EventEmitter<UserCreateData>();

  errorMessages: {[key: string]: {[key: string]: string}} = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 2 characters long.'
    },
    email: {
      required: 'Email is required.',
      email: 'Please enter a valid email address.'
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 1 character long.'
    },
    password_confirmation: {
      required: 'Password confirmation is required.',
      minlength: 'Password confirmation must be at least 1 character long.'
    }
  };
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.formSubmit.emit(this.userForm.value);
    }
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.userForm.get(controlName);

    if (control?.touched && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return this.errorMessages[controlName][firstErrorKey];
    }
    return null;
  }
}
