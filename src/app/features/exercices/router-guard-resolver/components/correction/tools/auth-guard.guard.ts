import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CorrectionFakeAuthService } from './fake-auth.service';

export const correctionAuthGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(CorrectionFakeAuthService)
  const router = inject(Router)

  if (auth.isAuthenticated()) return true

  else {
    router.navigate(['exos/10/login'])
    return false
  }
};