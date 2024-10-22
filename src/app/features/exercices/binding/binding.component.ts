import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
  imageUrl1: String = "assets/exos/binding/position.png"

  constructor(public readonly nav: NavigateService) {}
}
