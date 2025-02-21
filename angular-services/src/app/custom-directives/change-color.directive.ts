import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',// attribute selector
  standalone: true
})
export class ChangeColorDirective {

  @HostBinding('style.backgroundColor') color!:string;

  @HostListener('mouseover') mouseOver(event : Event){
    (this.element.nativeElement as HTMLElement).style.backgroundColor='green';
  }

  @HostListener('mouseout') mouseout(event : Event){
    this.color='red';
  }

  constructor(private element:ElementRef) { 
    (this.element.nativeElement as HTMLElement).style.backgroundColor='red';
  }

}
