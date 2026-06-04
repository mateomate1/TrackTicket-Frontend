import { Component, inject, OnInit } from '@angular/core';
import { FavoritesService } from '@services/favorites/favorites-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite-concerts',
  imports: [RouterLink],
  templateUrl: './favorite-concerts.html',
  styleUrl: './favorite-concerts.css',
})
export class FavoriteConcerts implements OnInit{
  favService = inject(FavoritesService);

  ngOnInit(): void {
    this.favService.loadFavConcerts();
  }
}
