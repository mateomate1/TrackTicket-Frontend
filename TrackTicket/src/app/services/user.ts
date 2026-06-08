import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Session } from '@services/session';

@Injectable({
  providedIn: 'root',
})
export class User {

  private readonly _userName = signal<string | null>(null);
  readonly userName = this._userName.asReadonly();
  private platformId = inject(PLATFORM_ID);

  constructor(private session: Session) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromSession();
    }
  }

  private loadFromSession(): void {
    if (!this.session.isSessionExpired()) {
      this._userName.set(this.session.getUserName());
    }
  }

  setUser(userName: string): void {
    this._userName.set(userName);
  }

  clearUser(): void {
  console.log('clearUser llamado');
  this._userName.set(null);
  console.log('userName después de clear:', this._userName());
}

  isLoggedIn(): boolean {
    return this._userName() !== null;
  }
}