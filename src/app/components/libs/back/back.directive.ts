import {Directive, HostListener} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Directive({
  selector: '[appBack]',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class BackDirective {

  constructor(private location: Location) { }

  @HostListener('click')
  onClick(): void {
    this.location.back();
  }
}
