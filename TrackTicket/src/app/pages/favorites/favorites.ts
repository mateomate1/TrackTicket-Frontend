import { Component } from '@angular/core';
import { FavoriteArtists } from "../../components/favorite-artists/favorite-artists";

@Component({
  selector: 'app-favorites',
  imports: [FavoriteArtists],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {}
