import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { FavouriteArtistRequestDTO } from '@interfaces/fav-artist-request';

@Injectable({
  providedIn: 'root',
})
export class FavouriteArtistService {
  private API_URL = 'http://localhost:8080/api/v1/favourites/artists';

  isFav = signal(false);

  constructor(private httpClient: HttpClient) {}

  addFavouriteArtist(request: FavouriteArtistRequestDTO): void {
    this.httpClient.post<void>(this.API_URL + '/add', request).subscribe({
      next: () => this.isFav.set(true),
    });
  }

  removeFavouriteArtist(request: FavouriteArtistRequestDTO): void {
    this.httpClient.post<void>(this.API_URL + '/remove', request).subscribe({
      next: () => this.isFav.set(false),
    });
  }

  isFavouriteArtist(request: FavouriteArtistRequestDTO): void {
    console.log("Se busco si era fav")
    this.httpClient.post<boolean>(this.API_URL + '/is-fav', request).subscribe({
      next: (res) => this.isFav.set(res),
      error: () => this.isFav.set(false),
    });
  }
}
