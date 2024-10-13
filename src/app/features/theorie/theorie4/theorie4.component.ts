import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie4',
  templateUrl: './theorie4.component.html',
  styleUrl: './theorie4.component.scss'
})
export class Theorie4Component {
  constructor(public readonly nav: NavigateService) {}
}
