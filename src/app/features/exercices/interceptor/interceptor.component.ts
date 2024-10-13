import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrl: './interceptor.component.scss'
})
export class InterceptorComponent {
  constructor(public readonly nav: NavigateService) {}
}
