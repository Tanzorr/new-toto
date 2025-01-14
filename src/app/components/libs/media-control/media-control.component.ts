import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Media } from '../../../models/media';

@Component({
  selector: 'app-media-control',
  templateUrl: './media-control.component.html',
  styleUrls: ['./media-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaControlComponent {
  @Input() mediaTitle!: Media['file_name'] | undefined;
  @HostBinding('class') class = 'd-flex flex-column align-items-center gap-3 p-3';
}
