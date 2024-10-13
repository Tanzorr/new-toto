import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserCreateData} from "../../../../models/entities/User";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  // Для редагування користувача ми можемо передати дані через @Input
  @Input() userData: UserCreateData = { name: '', email: '', password: '', password_confirmation: '' };
  @Output() formSubmit: EventEmitter<UserCreateData> = new EventEmitter<UserCreateData>();


  constructor(private fb: FormBuilder) {
    // Ініціалізація форми з валідаторами
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
    // Якщо userData передане (для редагування), заповнюємо поля форми
    if (this.userData) {
      this.userForm.patchValue({
        name: this.userData.name,
        email: this.userData.email
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Передаємо дані батьківському компоненту
      this.formSubmit.emit(this.userForm.value);
    }
  }
}
