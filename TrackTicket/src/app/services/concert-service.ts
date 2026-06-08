import { HttpClient, HttpParams } from '@angular/common/http';
import { VenueDTO } from './../interfaces/VenueDTO';
import { Injectable, signal } from '@angular/core';
import { searchResponse } from '@interfaces/concert-search-response';

@Injectable({
  providedIn: 'root',
})
export class ConcertService {
  API_URL = 'http://localhost:8080/api/v1/concerts/details';

  defaultConcert: searchResponse = {
    idTicketMaster: 'Cargando...',
    name: 'Cargando...',
    date: 'Cargando...',
    link: 'Cargando...',
    artistName: 'Cargando...',
    artistGenre: 'Cargando...',
    artistLink: 'Cargando...',
    venue: {
      venueName: 'Cargando...',
      latitude: 0,
      longitude: 0,
      venueAddress: 'Cargando...',
      venueState: 'Cargando...',
      venueCountry: 'Cargando...',
    },
  };

  concert = signal<searchResponse>(this.defaultConcert);

  constructor(private httpClient: HttpClient) {}

  getConcert(idConcertTicketmaster: string) {
    this.concert.set(this.defaultConcert);
    const params = new HttpParams()
      .set('idConcertTicketmaster', idConcertTicketmaster);

    this.httpClient.post<searchResponse>(this.API_URL, {}, { params }).subscribe((res) => {
      this.concert.set(res);
    });
  }
}
