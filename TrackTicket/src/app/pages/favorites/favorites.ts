import { Component, inject, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist';
import { ArtistsListService } from '../../services/artists-list-service';
import { Router } from '@angular/router';
import { ArtistService } from '@services/artist-service';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  artistService = inject(ArtistService);
  router = inject(Router);
}
