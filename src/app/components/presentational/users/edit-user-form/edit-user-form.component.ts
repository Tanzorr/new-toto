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
  originalImageUrl: string | File | undefined = '';
  @Input() userData!: User;
  @Output() formSubmit = new EventEmitter<User>();
  @Output() addMedia = new EventEmitter<void>();
  userForm: FormGroup = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userData'].currentValue) {
      this.userForm.patchValue(this.userData);
    }
  }

  onSubmit(): void {
    if (this.userForm.valid && this.userForm.dirty) {
      this.formSubmit.emit(this.userForm.value);
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

  isFormChanged(): boolean {
    const { image } = this.userForm.value;
    const isImageChanged = image && image !== this.originalImageUrl;
    return this.userForm.dirty || isImageChanged;
  }

  isCanSubmit(): boolean {
    return this.userForm.valid && this.isFormChanged();
  }

  selectMedia(): void {
    this.addMedia.emit();
  }
}
