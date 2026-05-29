import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Session } from '@services/session';

export const authGuard: CanActivateFn = () => {
  const session = inject(Session);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) {
    return true;
  }

  if (!session.isSessionExpired()) {
    return true;
  }

  return router.createUrlTree(['/auth']);
};