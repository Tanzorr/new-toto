import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InfoPage } from '../../../../models/infoPage';
import { infoPageErrorMessages } from '../../../../constans/error-messages';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditInfoComponent implements OnChanges {
  @Input() infoData: InfoPage | null = null;
  @Output() formSubmit = new EventEmitter<InfoPage>();
  infoForm = this.fb.group({
    id: [null],
    title: ['', [Validators.required, Validators.minLength(2)]],
    content: ['', [Validators.required, Validators.minLength(2)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['infoData'].currentValue) {
      this.infoForm.patchValue(changes['infoData'].currentValue);
    }
  }

  onSubmit(): void {
    if (this.isCanSubmit()) {
      this.formSubmit.emit(this.infoForm.value as InfoPage);
    }
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.infoForm.get(controlName);
    if (control?.dirty && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return infoPageErrorMessages[controlName][firstErrorKey];
    }
    return null;
  }
  isCanSubmit(): boolean {
    return this.infoForm.valid && this.infoForm.dirty;
  }
}
