import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Artist } from '@interfaces/artist';
import { searchResponse } from '@interfaces/concert-search-response';
import { enviroment } from '@shared/environmentAPI';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private http = inject(HttpClient);
  private token = localStorage.getItem('token');

  favArtists = signal<Artist[]>([]);
  favConcerts = signal<searchResponse[]>([]);
  
  loadFavArtists(): void {
    this.http.post<Artist[]>(
      `${enviroment.root}/v1/favourites/artists/list`,
      {
        token: this.token
      }
    ).subscribe({
      next: (response) => {
        this.favArtists.set(response);
      },
      error: (err) => {
        console.error(`Fail in POST request at ${enviroment.root}/v1/favourites/artists/list: ${err}`);
      }
    });
  }

  loadFavConcerts(): void {
    this.http.post<searchResponse[]>(
       `${enviroment.root}/v1/favourites/concerts/list`,
      {
        token: this.token
      }
    ).subscribe({
      next: (response) => {
        this.favConcerts.set(response);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
