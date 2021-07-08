import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor:string

  constructor(private eleRef:ElementRef, private renderer:Renderer2) {
    this.color = 'black';
    this.bgcolor='white';
   }                                                     // use in prem

   @HostListener('mouseover') onMouseOver(){
     this.color ='blue'
     this.bgcolor = 'lightgray'

   }
   @HostListener('mouseleave') onMouseLeave(){
    this.color ='black'
    this.bgcolor = 'white'

  }

}
