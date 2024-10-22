import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  imageUrl1: String = "assets/exos/directives/position.png"

  constructor(public readonly nav: NavigateService) {}
}
