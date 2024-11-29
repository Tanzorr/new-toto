import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  searchForm: FormGroup;

  @Input() customClass: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: [''],
    });

    this.searchForm
      .get('query')
      ?.valueChanges.pipe(
        debounceTime(300), // Чекає 300 мс після останньої зміни
        distinctUntilChanged() // Відправляє дані лише якщо вони змінилися
      )
      .subscribe((query: string) => {
        this.search.emit(query.trim());
      });
  }

  clearSearch(): void {
    this.searchForm.reset();
    this.search.emit(''); // Відправляємо пустий рядок
  }
}
