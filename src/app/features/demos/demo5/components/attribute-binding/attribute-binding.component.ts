import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.scss'
})
export class AttributeBindingComponent {
  maVariable: number = 0;
  url: string = "https://www.google.com";
  bool: boolean = true;

  min: number = 10;
  max: number = 50;

  rangeValue: number = this.min;

  changeValue (): void { this.maVariable = 42; }
}
