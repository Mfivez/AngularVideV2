import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie1',
  templateUrl: './theorie1.component.html',
  styleUrl: './theorie1.component.scss'
})
export class Theorie1Component {
  constructor(public readonly nav: NavigateService) {}
}
