import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  
  colors:string[]=['red', 'yellow']
  currentColor:string='black';
  @Input() parentData:string='black'

  @Output() childData = new EventEmitter<string>();

  constructor(){
    console.log('data from parent is : '+this.parentData);
    
  }

  changeColor(color:string){
    this.currentColor=color;
    this.childData.emit(this.currentColor);
  }

  intpuV:string='some';

  inputVTwoWay:string='';

  switchValue=5;

  printV(event:any){
    console.log('printV() : '+event.target.value);
    this.intpuV=event.target.value;
    console.log('inputV :'+this.intpuV);

    // console.log('local tag refernace #inV :'+inV);
    
  }



}
