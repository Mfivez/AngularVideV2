import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrl: './demo8.component.scss'
})
export class Demo8Component {
  constructor(public readonly nav: NavigateService) {}
}


