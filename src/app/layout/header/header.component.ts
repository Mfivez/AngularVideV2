import { Component } from '@angular/core';
import { HeaderService } from './tools/header.service';
import { MenuItem } from './tools/menu-item.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [HeaderService]
})
export class HeaderComponent {
  demoMenuItems: MenuItem[] = []
  ExoMenuItems: MenuItem[] = []
  TheoMenuItems: MenuItem[] = []


  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.demoMenuItems = this.headerService.getDemoMenuItems();
    this.ExoMenuItems = this.headerService.getExoMenuItems();
    this.TheoMenuItems = this.headerService.getTheorieMenuItems();
  }
}
