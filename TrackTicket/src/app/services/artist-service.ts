import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Artist } from '@interfaces/artist';
import { ArtistRequest } from '@interfaces/artistRequest';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  API_URL: string = 'http://localhost:8080/api/v1/artists/search';
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

  getConcerts(request: ArtistRequest) {
    this.artist.set({
      idArtist: '',
      name: '',
      spotifyProfileLink: '',
      linkList: '',
      linkImage: '',
      genre: '',
      albums: [],
    });
    this.httpClient.post<Artist>(this.API_URL, request).subscribe((res) => {
      this.artist.set(res);
    });
  }
}
