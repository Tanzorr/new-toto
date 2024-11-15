import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserCreateData} from "../../../../models/entities/User";



@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditUserFormComponent implements OnChanges{
  userForm: FormGroup;

  @Input() userData!: UserCreateData;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  errorMessages: {[key: string]: {[key: string]: string}} = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 2 characters long.'
    },
    email: {
      required: 'Email is required.',
      email: 'Please enter a valid email address.'
    }
  }

   constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
   }

  onSubmit() {
    if (this.userForm.valid && this.userForm.dirty) {
      this.formSubmit.emit(this.userForm.value);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['userData'].currentValue){
        this.userForm.patchValue(this.userData);
      }
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.userForm.get(controlName);

    console.log(control?.errors, control?.touched);

    if (control?.touched && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return this.errorMessages[controlName][firstErrorKey];
    }
    return null;
  }
}
