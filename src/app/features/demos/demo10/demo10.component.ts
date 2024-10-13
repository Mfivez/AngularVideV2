import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrl: './demo10.component.scss'
})
export class Demo10Component {
  constructor(public readonly nav: NavigateService) {}
}
