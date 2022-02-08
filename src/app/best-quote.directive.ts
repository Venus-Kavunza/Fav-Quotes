import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBestQuote]'
})
export class BestQuoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.textDecoration='line-through';
   }

}
