import { Injectable, signal } from '@angular/core';
import { Session } from '@services/session';
@Injectable({
  providedIn: 'root',
})

export class User {

  private readonly _userName = signal<string | null>(null);
  readonly userName = this._userName.asReadonly();

  constructor(private session: Session) {
    this.loadFromSession();

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
    this._userName.set(null);
  }

  isLoggedIn(): boolean {
    return this._userName() !== null;
  }

}
