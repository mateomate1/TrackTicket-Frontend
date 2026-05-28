import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Crypto } from '@services/crypto';
import { Session } from '@services/session';
import { User } from '@services/user';
import { enviroment } from '@shared/environmentAPI';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(
    private httpClient: HttpClient,
    private crypto: Crypto,
    private session: Session,
    private user: User,
    private router: Router
  ) {}

  async register(name: string, email: string, password: string): Promise<void> {
    const body = {
      name: this.crypto.encrypt(name),
      email: this.crypto.encrypt(email),
      password: this.crypto.encrypt(password)
    };

    await firstValueFrom(
      this.httpClient.post(enviroment.root + enviroment.register, body, { responseType: 'text' })
    );
  }

  async login(userName: string, password: string): Promise<void> {
    const body = {
      user: this.crypto.encrypt(userName),
      password: this.crypto.encrypt(password)
    };

    const token = await firstValueFrom(
      this.httpClient.post(
        enviroment.root + enviroment.login,
        body,
        { responseType: 'text' }
      )
    );

    this.session.saveSession(token, userName);
    this.user.setUser(userName);
  }

  async logout(): Promise<void> {
  const token = this.session.getToken();
  if (!token) return;

  const body = { token: this.crypto.encrypt(token) };

  try {
    await firstValueFrom(
      this.httpClient.post(
        enviroment.root + enviroment.logout,
        body,
        { responseType: 'text' }
      )
    );
  } catch (e) {}

  this.session.clearSession();
  this.user.clearUser();
  console.log('Navegando a search...');
  this.router.navigate(['/search']);
  console.log('URL actual:', this.router.url);
}

async deleteAccount(): Promise<void> {
  const token = this.session.getToken();
  if (!token) return;

  const body = { token: this.crypto.encrypt(token) };

  try {
    await firstValueFrom(
      this.httpClient.post(
        enviroment.root + enviroment.deleteAccount,
        body,
        { responseType: 'text' }
      )
    );
  } catch (e) {
  }

  this.session.clearSession();
  this.user.clearUser();
  this.router.navigate(['/search']);
}
}