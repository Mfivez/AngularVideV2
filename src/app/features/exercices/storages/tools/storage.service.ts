import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setUserPseudo(pseudo: string): void {
    localStorage.setItem('userPseudo', pseudo)
  }

  getUserPseudo(): string | null {
    return localStorage.getItem('userPseudo')
  }

  removeUserPseudo(): void {
    localStorage.removeItem('userPseudo')
  }

  setWelcomeMessage(message: string): void {
    sessionStorage.setItem("welcomeMessage", message)
  }

  getWelcomeMessage(): string | null {
    return sessionStorage.getItem("welcomeMessage")
  }

  removeWelcomeMessage(): void {
    sessionStorage.removeItem("welcomeMessage")
  }
}