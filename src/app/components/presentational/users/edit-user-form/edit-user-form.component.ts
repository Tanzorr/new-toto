import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../models/user';
import { userErrorMessages } from '../../../../constans/error-messages';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditUserFormComponent implements OnChanges {
  userForm: FormGroup;

  @Input() userData!: User;
  @Output() formSubmit: EventEmitter<User> = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid && this.userForm.dirty) {
      this.formSubmit.emit(this.userForm.value);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userData'].currentValue) {
      this.userForm.patchValue(this.userData);
    }
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.userForm.get(controlName);

    if (control?.touched && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return userErrorMessages[controlName][firstErrorKey];
    }
    return null;
  }
}
