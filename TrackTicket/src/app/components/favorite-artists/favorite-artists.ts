import { Component, inject, OnInit } from '@angular/core';
import { FavoritesService } from '@services/favorites/favorites-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-favorite-artists',
  imports: [RouterLink],
  templateUrl: './favorite-artists.html',
  styleUrl: './favorite-artists.css',
})
export class FavoriteArtists implements OnInit{
  favService = inject(FavoritesService);

  ngOnInit(): void {
    this.favService.loadFavArtists();
  }
}
