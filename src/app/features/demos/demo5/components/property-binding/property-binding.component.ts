import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})
export class PropertyBindingComponent {
  str: string = "hello world"
  num: number = 15
  bool: boolean = true
  null_: null = null
  undefined_: undefined = undefined

  any: any[] = ["string", 12, true];

  tuple: [string, number] = ["hi", 3]

}
