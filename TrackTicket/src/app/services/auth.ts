import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Crypto } from '@services/crypto';
import { Session } from '@services/session';
import { enviroment } from '@shared/environmentAPI';

@Injectable({
  providedIn: 'root',
})

export class Auth {

  constructor( private httpClient: HttpClient, private crypto: Crypto, private session: Session ){}

  async register(userName: string, email: string, password: string): Promise<void> {
    const body = {
      userName: this.crypto.encrypt(userName),
      email: this.crypto.encrypt(email),
      password: this.crypto.encrypt(password)
    };

    await firstValueFrom(
      this.httpClient.post(enviroment.root + enviroment.register, body)
    );
  }

  async login(userName: string, password: string): Promise<void> {
    const body = {
      userName: this.crypto.encrypt(userName),
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

  }

  async logout(): Promise<void> {
    const token = this.session.getToken();
    await firstValueFrom(
      this.httpClient.post(
        enviroment.root + enviroment.logout,
        null,
        {
          headers: { 'Authorization': token ?? '' },
          responseType: 'text'
        }
      )
    );
    this.session.clearSession();
  }

  async deleteAccount(): Promise<void> {
    const token = this.session.getToken();
    await firstValueFrom(
      this.httpClient.delete(
        enviroment.root + enviroment.deleteAccount,
        {
          headers: { 'Authorization': token ?? '' },
          responseType: 'text'
        }
      )
    );
    this.session.clearSession();
  }
}
