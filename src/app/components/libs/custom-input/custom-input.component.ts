import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type fn = (value: any) => void;

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  value: string = '';
  disabled: boolean = false;

  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';

  private onChange: fn = (_: any) => {};
  private onTouched: fn = () => {};

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

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }
}
