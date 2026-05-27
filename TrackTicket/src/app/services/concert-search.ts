import { searchRequest } from './../interfaces/concert-search-request';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { searchResponse } from '@interfaces/concert-search-response';
import { enviroment } from '@shared/environmentAPI';

@Injectable({
  providedIn: 'root',
})
export class ConcertSearch {
  API_URL: string = 'http://localhost:8080/api/v1/concerts/search';
  concerts = signal<searchResponse[]>([]);

  constructor(private httpClient: HttpClient) {}

  getConcerts(request: searchRequest) {
    this.concerts.set([])
    this.httpClient.post<searchResponse[]>(this.API_URL, request).subscribe((res) => {
      this.concerts.set(res);
    });
  }
}
