import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss'
})
export class TwoWayBindingComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';

  send (): void {
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
    console.log(this.gender);
  }
  
}
