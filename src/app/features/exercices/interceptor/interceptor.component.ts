import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';
import { LoaderService } from './components/correction/tools/loader.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrl: './interceptor.component.scss'
})
export class InterceptorComponent {
  constructor(public readonly nav: NavigateService, public loaderService: LoaderService) {}
}
