import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-two-way',
  templateUrl: './property-binding-two-way.component.html',
  styleUrl: './property-binding-two-way.component.scss'
})
export class PropertyBindingTwoWayComponent {
  maVariable1: string = "";
  maVariable2: number = 0;
  maVariable3: boolean = false;

  changeValue (text: KeyboardEvent | any) {
    console.log("Called: ", text.target.value);
    this.maVariable1 = text.target.value;
  }
}
