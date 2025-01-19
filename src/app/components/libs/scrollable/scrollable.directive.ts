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
  scrollHeight = 100;
  @Input() scrollThreshold: number = this.scrollHeight;
  @Output() reachedThreshold: EventEmitter<void> = new EventEmitter<void>();

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
