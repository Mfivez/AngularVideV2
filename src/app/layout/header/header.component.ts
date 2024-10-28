import { Component } from '@angular/core';
import { HeaderService } from './tools/header.service';
import { MenuItem } from './tools/menu-item.models';
import { ThemeService } from '../../shared/themes/dark-mode.service';

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
  isDarkTheme: boolean

  constructor(private headerService: HeaderService, private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.getIsDarkTheme()
    this.themeService.setTheme(this.isDarkTheme)
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
