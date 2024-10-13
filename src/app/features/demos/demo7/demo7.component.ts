import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrl: './demo7.component.scss'
})
export class Demo7Component {
  constructor(public readonly nav: NavigateService) {}

}
