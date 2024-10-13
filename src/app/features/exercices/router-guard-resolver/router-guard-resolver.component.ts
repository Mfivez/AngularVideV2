import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-router-guard-resolver',
  templateUrl: './router-guard-resolver.component.html',
  styleUrl: './router-guard-resolver.component.scss'
})
export class RouterGuardResolverComponent {
  
  constructor(public readonly nav: NavigateService) {}
}
