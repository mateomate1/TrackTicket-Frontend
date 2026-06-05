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
    idTicketMaster: 'string',
    name: 'string',
    date: 'string',
    link: 'string',
    artistName: 'string',
    artistGenre: 'string',
    artistLink: 'string',
    venue: {
      venueName: 'string',
      latitude: 1,
      longitude: 1,
      venueAddress: 'string',
      venueState: 'string',
      venueCountry: 'string',
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
