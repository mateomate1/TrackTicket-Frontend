import { searchResponse } from '@interfaces/concert-search-response';

import { Component, inject, signal } from '@angular/core';

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

  loading = signal(false);

  animateZoom(targetZoom: number) {
    const interval = setInterval(() => {
      const currentZoom = this.mapa.zoom();
      if (currentZoom >= targetZoom) {
        clearInterval(interval);
        this.loading.set(false);
        return;
      }
      this.mapa.zoom.set(currentZoom + 1);
    }, 80);
  }

  listClick(site: searchResponse) {
    this.loading.set(true);
    this.mapa.zoom.set(5);
    setTimeout(() => {
      this.mapa.center.set({
        lat: site.venue.latitude,
        lng: site.venue.longitude,
      });
      this.animateZoom(16);
    }, 500);
  }
}
