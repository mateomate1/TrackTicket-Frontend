import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '@shared/environmentAPI';

@Injectable({
  providedIn: 'root',
})

export class Crypto {
  
  
    constructor(private httpClient: HttpClient) {}

    getPublicKey(): Observable<string> {
      return this.httpClient.post(
        enviroment.root + enviroment.publicKey, 
        null, 
        {
          responseType: 'text'
        }
      )
    }
}
