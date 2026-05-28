import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

const SESSION_TOKEN_KEY = 'token';
const SESSION_USERNAME_KEY = 'userName';
const SESSION_EXPIRY_KEY = 'sessionExpiry';
const SESSION_DURATION_MS = 5 * 60 * 60 * 1000;

@Injectable({
  providedIn: 'root',
})
export class Session {

  private platformId = inject(PLATFORM_ID);

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  saveSession(token: string, userName: string): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(SESSION_TOKEN_KEY, token);
    localStorage.setItem(SESSION_USERNAME_KEY, userName);
    this.resetExpiry();
  }

  getToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(SESSION_TOKEN_KEY);
  }

  getUserName(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(SESSION_USERNAME_KEY);
  }

  clearSession(): void {
    if (!this.isBrowser()) return;
    localStorage.removeItem(SESSION_TOKEN_KEY);
    localStorage.removeItem(SESSION_USERNAME_KEY);
    localStorage.removeItem(SESSION_EXPIRY_KEY);
  }

  isSessionExpired(): boolean {
    if (!this.isBrowser()) return true;
    const expiry = localStorage.getItem(SESSION_EXPIRY_KEY);
    if (!expiry) return true;
    return Date.now() > parseInt(expiry);
  }

  resetExpiry(): void {
    if (!this.isBrowser()) return;
    const expiry = Date.now() + SESSION_DURATION_MS;
    localStorage.setItem(SESSION_EXPIRY_KEY, expiry.toString());
  }
}