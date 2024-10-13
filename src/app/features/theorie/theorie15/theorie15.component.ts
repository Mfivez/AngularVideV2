import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie15',
  templateUrl: './theorie15.component.html',
  styleUrl: './theorie15.component.scss'
})
export class Theorie15Component {
  constructor(public readonly nav: NavigateService) {}
}
