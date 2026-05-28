import { Injectable } from '@angular/core';

const SESSION_TOKEN_KEY = 'token';
const SESSION_USERNAME_KEY = 'userName';
const SESSION_EXPIRY_KEY = 'sessionExpiry';
const SESSION_DURATION_MS = 5 * 60 * 60 * 1000; // 5 horas

@Injectable({
  providedIn: 'root',
})


export class Session {

  saveSession(token: string, userName: string): void {
    localStorage.setItem(SESSION_TOKEN_KEY, token);
    localStorage.setItem(SESSION_USERNAME_KEY, userName);

    this.resetExpiry();
  }

  getToken(): string | null {
    return localStorage.getItem(SESSION_TOKEN_KEY);
  }

  getUserName(): string | null {
    return localStorage.getItem(SESSION_USERNAME_KEY);
  }

  clearSession(): void {
    localStorage.removeItem(SESSION_TOKEN_KEY);
    localStorage.removeItem(SESSION_USERNAME_KEY);
    localStorage.removeItem(SESSION_EXPIRY_KEY);
  }

  isSessionExpired(): boolean {
    const expiry = localStorage.getItem(SESSION_EXPIRY_KEY);
    if (!expiry) return true;
    return Date.now() > parseInt(expiry);
  }

  resetExpiry(): void {
    const expiry = Date.now() + SESSION_DURATION_MS;
    localStorage.setItem(SESSION_EXPIRY_KEY, expiry.toString());
    
  }
}
