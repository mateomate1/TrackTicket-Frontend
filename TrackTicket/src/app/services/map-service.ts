import { Injectable, signal } from '@angular/core';
import { MapCenter } from '@interfaces/map-center';
import { MapMarker } from '@interfaces/map-marker';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  center = signal<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });

  zoom = signal(5);

  markers = signal<google.maps.LatLngLiteral[]>([]);

  resetMarkers() {
    this.markers.set([]);
  }

  addMarker(newMarker: google.maps.LatLngLiteral) {
    this.markers.update((markers) => [...markers, newMarker]);
  }

  setCenter(newCenter: google.maps.LatLngLiteral) {
    this.center.set(newCenter);
  }

  setZoom(newZoom: number) {
    this.zoom.set(newZoom);
  }

  setUserLocation() {
    if (typeof navigator === 'undefined') {
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      this.center.set({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });

      this.zoom.set(10);
    });
  }
}
