import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomComponent } from './custom-component/custom.component';
import { StructuralDirectiveComponent } from "./structural-directive/structural-directive.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomComponent, StructuralDirectiveComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-intro';

  hColor:string='black';
  getHC(event:string){
    return this.hColor=event;
  }
}
