import { inject, Injectable } from '@angular/core';
import { Artist } from '../interfaces/artist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private http =  inject(HttpClient);
  artists: Artist[] = [
    {
      id: "1",
      name: "BadBunny",
      linkImage:"https://i.scdn.co/image/ab6761610000517481f47f44084e0a09b5f0fa13",
      linkList:"",
      genres: "Regueton",
      albums: ["algo", "la macarena", "no me se albums de bad bunny", "Paquito el chocolatero",]
    },
    {
      id: "2",
      name: "Melendi",
      linkImage:"",
      linkList:"",
      genres: "Rock",
      albums: []
    },
    {
      id: "3",
      name: "Metallica",
      linkImage:"",
      linkList:"",
      genres: "Metal",
      albums: []
    },
    {
      id: "4",
      name: "Juan Magan",
      linkImage:"",
      linkList:"",
      genres: "Regueton",
      albums: []
    },
    {
      id: "5",
      name: "Pitbull",
      linkImage:"",
      linkList:"",
      genres: "Regueton",
      albums: []
    }
  ];

  getArtists(): Artist[]{
    return this.artists
  }

  getArtistById(id:string): Artist | undefined{
    return this.artists.find(
      artist => artist.id === id
    );
  }

  // getArtistById(id:string): Observable<Artist>{
  //   return this.http.get<Artist>(`http://localhost:8080/v1/artist/profile`);
  // }
}
