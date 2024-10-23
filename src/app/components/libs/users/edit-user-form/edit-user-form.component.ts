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
}
