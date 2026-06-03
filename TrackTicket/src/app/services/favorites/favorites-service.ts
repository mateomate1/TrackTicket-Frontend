import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Artist } from '@interfaces/artist';
import { enviroment } from '@shared/environmentAPI';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private http = inject(HttpClient);
  

  favArtists = signal<Artist[]>([]);
  
  loadFavArtists(): void {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    const params = new HttpParams().set('token', token);
    this.http.post<Artist[]>(`${enviroment.root}/v1/favourites/artists/list`, params).subscribe({
      next: (response) => {
        this.favArtists.set(response);
      },
      error: (err) => {
        console.error(err);
      }
    });

  }
}
