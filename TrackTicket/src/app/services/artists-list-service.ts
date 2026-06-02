import { inject, Injectable, signal } from '@angular/core';
import { Artist } from '../interfaces/artist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistsListService {
  private http =  inject(HttpClient);
  artists = signal<Artist[]>([
    {
      idArtist: "1",
      name: "BadBunny",
      linkImage: "https://i.scdn.co/image/ab6761610000517481f47f44084e0a09b5f0fa13",
      linkList: "",
      genre: "Regueton",
      albums: ["algo", "la macarena", "no me se albums de bad bunny", "Paquito el chocolatero",],
      spotifyProfileLink: ''
    },
    {
      idArtist: "2",
      name: "Melendi",
      linkImage: "",
      linkList: "",
      genre: "Rock",
      albums: [],
      spotifyProfileLink: ''
    },
    {
      idArtist: "3",
      name: "Metallica",
      linkImage: "",
      linkList: "",
      genre: "Metal",
      albums: [],
      spotifyProfileLink: ''
    },
    {
      idArtist: "4",
      name: "Juan Magan",
      linkImage: "",
      linkList: "",
      genre: "Regueton",
      albums: [],
      spotifyProfileLink: ''
    },
    {
      idArtist: "5",
      name: "Pitbull",
      linkImage: "",
      linkList: "",
      genre: "Regueton",
      albums: [],
      spotifyProfileLink: ''
    }
  ])

  getArtists(): Artist[]{
    return this.artists()
  }

  setArtist(newArtist: Artist){
    this.artists.update((markers) => [...markers, newArtist])
  }

  setArtists(newArtists: Artist[]){
    this.artists.set(newArtists)
  }

  getArtistById(id:string): Artist | undefined{
    return this.artists().find(
      artist => artist.idArtist === id
    );
  }

  // getArtistById(id:string): Observable<Artist>{
  //   return this.http.get<Artist>(`http://localhost:8080/v1/artist/profile`);
  // }
}
