import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBestQuote]'
})
export class BestQuoteDirective {

  constructor(private elem:ElementRef) {}
  
  @HostListener("click") onClicks(){
    this.textDeco("None")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
    private textDeco(action:string){
      this.elem.nativeElement.style.textDecoration=action;

    }
  }


