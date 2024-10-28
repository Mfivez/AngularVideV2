import { Component } from '@angular/core';
import { HeaderService } from './tools/header.service';
import { MenuItem } from './tools/menu-item.models';
import { ThemeService } from '../../shared/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [HeaderService]
})
export class HeaderComponent {
  demoMenuItems: MenuItem[] = [];
  ExoMenuItems: MenuItem[] = [];
  TheoMenuItems: MenuItem[] = [];
  TsMenuItems: MenuItem[] = [];
  isDarkTheme: boolean = false;

  constructor(private headerService: HeaderService, private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.getIsDarkTheme()
    this.toggleTheme()
  }

  ngOnInit(): void {
    this.demoMenuItems = this.headerService.getDemoMenuItems();
    this.ExoMenuItems = this.headerService.getExoMenuItems();
    this.TheoMenuItems = this.headerService.getTheorieMenuItems();
    this.TsMenuItems = this.headerService.getTsMenuItems();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setTheme(this.isDarkTheme);
  }
}
