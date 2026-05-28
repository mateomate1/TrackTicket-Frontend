import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Session } from '@services/session';
import { User } from '@services/user';

export const sessionInterceptor: HttpInterceptorFn = (req, next) => {
  const session = inject(Session);
  const user = inject(User);

  if (session.isSessionExpired()) {
    session.clearSession();
    user.clearUser();

    return next(req);
  }

  
  session.resetExpiry();
  return next(req);
};
