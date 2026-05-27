import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { enviroment } from '@shared/environmentAPI';

@Injectable({
  providedIn: 'root',
})

export class Crypto {
  
    private publikey: CryptoKey | null = null;
    private readonly REFRESH_INTERNAL_MS = 15 * 60 * 1000;

    constructor(private httpClient: HttpClient) {
      this.loadPublicKey();
      setInterval(() => this.loadPublicKey(), this.REFRESH_INTERNAL_MS);

    }

    private async loadPublicKey(): Promise<void> {

      try {
        const base64Key = await firstValueFrom (
          this.httpClient.post(
            enviroment.root + enviroment.publicKey,
            null, 
            { 
              responseType: 'text'
            }
          )
        );

        const binKey = this.base64ToArrayBuffer(base64Key);

        this.publikey = await crypto.subtle.importKey(
          'spki',
          binKey, 
          {
            name: 'RSA-OAEP', hash: 'SHA-256'
          },
          false,
          ['encrypt']
        );

        console.log('Clave pública cargada correctamente');
      } catch(error) {

        console.error('Error al cargar la clave pública:', error);
      }

    }

    private base64ToArrayBuffer(base64: string): ArrayBuffer {
      const binaryString = atob(base64);
      const bytes = new Uint8Array(binaryString.length);

      for(let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      return bytes.buffer;
    }
   
    async encrypt(text: string): Promise<String> {
      if (!this.publikey) {
        throw new Error('La clave publica aún no está cargada');

      }

      const encoded = new TextEncoder().encode(text);

      const encryptedBuffer = await crypto.subtle.encrypt(
        { name: 'RSA-OAEP' },
        this.publikey,
        encoded

      );

      return this.arrayBufferToBase64(encryptedBuffer);
    }

    private arrayBufferToBase64(buffer: ArrayBuffer): string {
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }

      return btoa(binary);
    }
}
