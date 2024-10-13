import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FakeAuthService } from './fake-auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  if (inject(FakeAuthService).isAuthenticated()) return true
  
  else {
    inject(Router).navigate(['/login'])
    return false
  }
};
