import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Optional,
  Self,
  SkipSelf
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

type fn = (value: any) => void;

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';

  value: any = '';
  disabled: boolean = false;

  private onChange: fn = (_: any) => {};
  private onTouched: fn = () => {};

  constructor(@Optional() @Self() @SkipSelf() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: fn): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: any): void {
    const value = event.target.value;
    this.onChange(value);
  }

  get errors() {
    return this.ngControl?.errors;
  }

  get isTouched() {
    return this.ngControl?.touched;
  }

  get isInvalid() {
    return this.ngControl?.invalid && (this.ngControl?.touched || this.ngControl?.dirty);
  }
}
