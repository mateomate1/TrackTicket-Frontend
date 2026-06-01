import { Component, Inject, inject, OnInit } from '@angular/core';
import { ArtistService } from '@services/artist-service';

@Component({
  selector: 'app-artist-profile',
  imports: [],
  templateUrl: './artist-profile.html',
  styleUrl: './artist-profile.css',
})
export class ArtistProfile {
  artistService = inject(ArtistService);
}
