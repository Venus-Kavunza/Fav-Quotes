import { Directive, ElementRef, HostListener } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';


@Directive({
  selector: '[appBestQuote]'
})
export class BestQuoteDirective {

  constructor(private elem: ElementRef) {
      elem.nativeElement.style. backgroundColor = "";
    }
  }


