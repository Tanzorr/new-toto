import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class TableComponent {
  @Input() data!: any;
  @Input() columns: { header: string; field?: string; template?: boolean }[] = [];
  @Input() fragment!: TemplateRef<unknown>;
  @Input() trExtraClasses: string = '';
}
