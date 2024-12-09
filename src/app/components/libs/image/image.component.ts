import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  @Input() media: { file_path: string; file_name: string } | null = null;
  @Input() customClass: string | null = null;
}
