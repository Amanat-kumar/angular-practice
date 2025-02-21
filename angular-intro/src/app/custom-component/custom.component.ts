import { Component } from "@angular/core";


@Component({
    selector: 'custom-component',
    // selector: '.custom-component',  //selector as class
    // selector: '[custom-component]',  // selector as attribute
    templateUrl: './custom.component.html',
    standalone: true
})
export class CustomComponent{}