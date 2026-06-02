import { Component, Inject, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '@services/artist-service';

@Component({
  selector: 'app-artist-profile',
  imports: [],
  templateUrl: './artist-profile.html',
  styleUrl: './artist-profile.css',
})
export class ArtistProfile {
  artistService = inject(ArtistService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    const genero = this.route.snapshot.paramMap.get('genero');

    this.artistService.getArtist({
      artistName: nombre!,
      artistGenre: genero!,
    });
  }
}
