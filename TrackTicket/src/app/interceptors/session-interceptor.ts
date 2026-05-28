import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Session } from '@services/session';

export const sessionInterceptor: HttpInterceptorFn = (req, next) => {
  const session = inject(Session);

  if (session.isSessionExpired()) {
    session.clearSession();
    
    return next(req);
  }

  session.resetExpiry();
  return next(req);
  
};
