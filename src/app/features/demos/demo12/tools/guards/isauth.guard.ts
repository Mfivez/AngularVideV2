import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const isauthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loginService = inject(LoginService)
  
  if (loginService.isConnected) return true
  else {
    alert("Veuillez vous connecter pour accéder à cette page .")
    return router.createUrlTree(['demos/12'])
  }
};
