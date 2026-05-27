import { Injectable, signal } from '@angular/core';
import { MapCenter } from '@interfaces/map-center';
import { MapMarker } from '@interfaces/map-marker';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  center = signal<MapCenter>({
    lat: 0,
    lng: 0,
  });

  zoom = signal(5);

  markers = signal<MapMarker[]>([]);

  resetMarkers() {
    this.markers.set([]);
  }

  addMarker(newMarker: MapMarker) {
    this.markers.update((markers) => [...markers, newMarker]);
  }

  setCenter(newCenter: MapCenter) {
    this.center.set(newCenter);
  }

  setZoom(newZoom: number) {
    this.zoom.set(newZoom);
  }
}
