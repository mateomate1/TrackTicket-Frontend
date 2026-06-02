import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Artist } from '@interfaces/artist';
import { ArtistRequest } from '@interfaces/artistRequest';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  API_URL = 'http://localhost:8080/api/v1/artists/profile';

  artist = signal<Artist>({
    idArtist: '',
    name: '',
    spotifyProfileLink: '',
    linkList: '',
    linkImage: '',
    genre: '',
    albums: [],
  });

  constructor(private httpClient: HttpClient) {}

  getArtist(request: ArtistRequest) {
    const params = new HttpParams()
      .set('artistName', request.artistName)
      .set('artistGenre', request.artistGenre);

    this.httpClient.post<Artist>(this.API_URL, {}, { params }).subscribe((res) => {
      this.artist.set(res);
    });
  }
}
