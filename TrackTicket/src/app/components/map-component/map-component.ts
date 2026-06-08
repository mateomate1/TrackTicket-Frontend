import { LocationService } from './../../services/location-service';
import { Component, inject, signal } from '@angular/core';
import { MapService } from '@services/map-service';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';

@Component({
  selector: 'map-component',
  imports: [GoogleMap, MapAdvancedMarker],
  templateUrl: './map-component.html',
  styleUrl: './map-component.css',
})
export class MapComponent {
  locationService = inject(LocationService);
  mapService = inject(MapService);

  center = signal<google.maps.LatLngLiteral>({ lat: 24, lng: 12 });
  zoom = signal(12);

  markers = this.mapService.markers;

  constructor() {
    this.getLocation();
  }

  resetMarkers() {
    this.markers.set([]);
  }

  addMarker(newMarker: google.maps.LatLngLiteral) {
    this.markers.update((markers) => [...markers, newMarker]);
  }

  setCenter(newCenter: google.maps.LatLngLiteral) {
    this.center.set(newCenter);
  }

  /*
  getLocation() {
    this.locationService.getPosition().then((pos) => {
      this.center.set({
        lat: pos.lat,
        lng: pos.lng,
      });
    });
  }
    */
  getLocation() {
    this.locationService.getPosition().then((pos) => {
      const userLocation = {
        lat: pos.lat,
        lng: pos.lng,
      };

      this.center.set(userLocation);

      this.markers.update((markers) => [...markers, userLocation]);
    });
  }

  openGoogleMaps(marker: google.maps.LatLngLiteral) {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=' + marker.lat + ',' + marker.lng,
      '_blank',
    );
  }
}
