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
}
