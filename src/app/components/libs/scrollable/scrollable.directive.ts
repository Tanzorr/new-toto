import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appScrollable]',
})
export class ScrollableDirective {
  @Input() scrollThreshold = 100; // Висота в пікселях до нижнього краю
  @Output() reachedThreshold = new EventEmitter<void>();

  constructor(private el: ElementRef) {}
  @HostBinding('class') class = 'scrollable';

  @HostListener('scroll', ['$event'])
  onScroll(): void {
    const element = this.el.nativeElement;
    const scrollPosition = element.scrollTop + element.clientHeight;
    const maxScroll = element.scrollHeight;

    if (maxScroll - scrollPosition <= this.scrollThreshold) {
      this.reachedThreshold.emit();
    }
  }
}
