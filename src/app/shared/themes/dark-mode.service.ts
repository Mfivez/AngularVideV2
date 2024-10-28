import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../features/demos/demo13/tools/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme;

  constructor(private readonly localService: LocalStorageService) {
    this.isDarkTheme = this.localService.getItem("isDarkTheme")
  }

  setTheme(isDarkTheme: boolean) {
    this.isDarkTheme = isDarkTheme
    this.localService.setItem("isDarkTheme", this.isDarkTheme)
    if (isDarkTheme) {
      document.body.classList.remove('light-theme')
      document.body.classList.add("dark-theme")
    } else {
      document.body.classList.remove('dark-theme')
      document.body.classList.add("light-theme")
    }
  }

  getIsDarkTheme(): boolean {
    return this.localService.getItem("isDarkTheme")
  }
}