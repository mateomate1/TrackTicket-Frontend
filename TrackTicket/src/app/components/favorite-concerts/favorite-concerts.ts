import { Component, inject, OnInit } from '@angular/core';
import { FavoritesService } from '@services/favorites/favorites-service';
import { Router, RouterLink } from '@angular/router';
import { searchResponse } from '@interfaces/concert-search-response';

@Component({
  selector: 'app-favorite-concerts',
  imports: [RouterLink],
  templateUrl: './favorite-concerts.html',
  styleUrl: './favorite-concerts.css',
})
export class FavoriteConcerts implements OnInit {
  favService = inject(FavoritesService);
  router = inject(Router);

  ngOnInit(): void {
    this.favService.loadFavConcerts();
  }

  concertDetailClick(concert: searchResponse) {
    this.router.navigate(['/concert', concert.idTicketMaster]);
  }
}
