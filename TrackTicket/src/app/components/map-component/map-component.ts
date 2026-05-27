import { Component, inject } from '@angular/core';
import { MapService } from '@services/map-service';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'map-component',
  imports: [GoogleMapsModule],
  templateUrl: './map-component.html',
  styleUrl: './map-component.css',
})
export class MapComponent {
  mapService = inject(MapService);
}
