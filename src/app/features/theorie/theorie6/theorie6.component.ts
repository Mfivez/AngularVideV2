import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie6',
  templateUrl: './theorie6.component.html',
  styleUrl: './theorie6.component.scss'
})
export class Theorie6Component {
  imageUrl1: String = "assets/directives/highlight.png"

  constructor(public nav: NavigateService) {}

  isVisible = true;
  items = ['Item 1', 'Item 2', 'Item 3'];
  isActive = false;
  isBright = false;

  changeVisibility() {
    this.isVisible = !this.isVisible
  }

  changeIsActive() {
    this.isActive = ! this.isActive
  }

  changeIsBright() {
    this.isBright = !this.isBright
  }
}
