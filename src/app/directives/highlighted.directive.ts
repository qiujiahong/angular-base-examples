import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor() {
    console.log("directive created")
  }

  // @HostBinding('class.highlighted')
  // get cssClasses(){
  //   return true;
  // }

  // @HostBinding('className')
  // get cssClasses(){
  //   return "highlighted";
  // }

  @HostBinding('style.border')
  get cssClasses(){
    return "1px solid red";
  }

}
