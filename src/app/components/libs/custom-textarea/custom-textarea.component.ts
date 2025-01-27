import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type fn = (value: any) => void;
@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextareaComponent),
      multi: true,
    },
  ],
})
export class CustomTextareaComponent implements ControlValueAccessor {
  value: string = '';
  disabled: boolean = false;

  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() rows = 3;

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
    const input = event.target as HTMLTextAreaElement;
    this.value = input.value;
    this.onChange(this.value);
  }
}
