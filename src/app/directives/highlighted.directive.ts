import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input('appHighlighted')
  isHighlighted = false;

  constructor() {
    console.log("directive created")
  }

  @HostBinding('class.highlighted')
  get cssClasses(){
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled(){
    return "true";
  }

  // @HostBinding('className')
  // get cssClasses(){
  //   return "highlighted";
  // }

  // @HostBinding('style.border')
  // get cssClasses(){
  //   return "1px solid red";
  // }

}
