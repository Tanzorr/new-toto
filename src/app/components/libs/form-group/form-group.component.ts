import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent {
  @Input() errorMessage!: string | null;
  @Input() label!: string;
  @Input() controlName!: string;
}
