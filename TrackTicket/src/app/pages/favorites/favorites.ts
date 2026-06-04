import { Component } from '@angular/core';
import { FavoriteArtists } from "../../components/favorite-artists/favorite-artists";
import { FavoriteConcerts } from '@components/favorite-concerts/favorite-concerts';

@Component({
  selector: 'app-favorites',
  imports: [FavoriteArtists, FavoriteConcerts],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {}
