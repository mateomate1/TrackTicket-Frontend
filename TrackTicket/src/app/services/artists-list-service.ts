import { inject, Injectable, signal } from '@angular/core';
import { Artist } from '../interfaces/artist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '@shared/environmentAPI';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private http = inject(HttpClient);

  getArtist(name: string, genre: string): Observable<Artist> {
    return this.http.post<Artist>(
      `${enviroment.root}/v1/artist/profile`,
      {
        name,
        genre
      }
    );
  }
}
