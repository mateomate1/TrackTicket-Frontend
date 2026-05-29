import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { enviroment } from '@shared/environmentAPI';
import { isPlatformBrowser } from '@angular/common';
import * as forge from 'node-forge';

@Injectable({
  providedIn: 'root',
})
export class Crypto {

  private publicKey: forge.pki.PublicKey | null = null;
  private readonly REFRESH_INTERVAL_MS = 15 * 60 * 1000;
  private platformId = inject(PLATFORM_ID);

  constructor(private httpClient: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadPublicKey();
      setInterval(() => this.loadPublicKey(), this.REFRESH_INTERVAL_MS);
    }
  }

  private async loadPublicKey(): Promise<void> {
    try {
      const base64Key = await firstValueFrom(
        this.httpClient.post(
          enviroment.root + enviroment.publicKey,
          null,
          { responseType: 'text' }
        )
      );

      const derKey = forge.util.decode64(base64Key);
      const asn1 = forge.asn1.fromDer(derKey);
      this.publicKey = forge.pki.publicKeyFromAsn1(asn1);

      console.log('Clave pública cargada correctamente');
    } catch (error) {
      console.error('Error al cargar la clave pública:', error);
    }
  }

  encrypt(text: string): string {
    if (!this.publicKey) {
      throw new Error('La clave pública aún no está cargada');
    }
    const encrypted = (this.publicKey as any).encrypt(text, 'RSAES-PKCS1-V1_5');
    return forge.util.encode64(encrypted);
  }
}