import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FakeAuthService } from './fake-auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(FakeAuthService)
  const router = inject(Router)

  if (auth.isAuthenticated()) return true

  else {
    router.navigate(['exos/8/login'])
    return false
  }
};