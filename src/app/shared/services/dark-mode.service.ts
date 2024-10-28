import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = true;


  setTheme(isDarkTheme: boolean) {
    this.isDarkTheme = isDarkTheme
    if (isDarkTheme) {
      document.body.classList.remove('light-theme')
      document.body.classList.add("dark-theme")
    } else {
      document.body.classList.remove('dark-theme')
      document.body.classList.add("light-theme")
    }
  }

  getIsDarkTheme(): boolean {
    return this.isDarkTheme
  }
}