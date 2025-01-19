import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attach-file',
  templateUrl: './attach-file.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachFileComponent {
  mediaForm: FormGroup = this.formBuilder.group({
    media: [null],
  });
  @Output() fileData!: EventEmitter<Event>;

  constructor(private formBuilder: FormBuilder) {
    this.fileData = new EventEmitter();
  }
  handleFileInput($event: Event) {
    this.fileData.emit($event);
  }
}
