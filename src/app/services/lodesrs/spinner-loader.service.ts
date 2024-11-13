import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerLoaderService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loader$ = this.loaderSubject.asObservable();

  show() {
    this.loaderSubject.next(true);
  }

  hide() {
    this.loaderSubject.next(false);
  }
}
