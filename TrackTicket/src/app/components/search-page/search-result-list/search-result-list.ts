import { searchResponse } from '@interfaces/concert-search-response';
import { Component, inject } from '@angular/core';
import { ConcertSearch } from '@services/concert-search';
import { MapService } from '@services/map-service';

@Component({
  selector: 'search-result-list',
  standalone: true,
  imports: [],
  templateUrl: './search-result-list.html',
  styleUrl: './search-result-list.css',
})
export class SearchResultList {
  concertSearch = inject(ConcertSearch);
  mapa = inject(MapService);

  listClick(site: searchResponse) {
    this.mapa.center.set({ lat: site.venue.latitude, lng: site.venue.longitude });
    this.mapa.zoom.set(16);
  }
}
