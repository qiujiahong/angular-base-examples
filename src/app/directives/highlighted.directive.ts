import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('appHighlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight= new EventEmitter();

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

  @HostListener('mouseover',['$event'])
  mouseOver($event){
    console.log($event);
    this.isHighlighted=true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle(){
    this.isHighlighted = !this.isHighlighted ;
    this.toggleHighlight.emit(this.isHighlighted);
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
