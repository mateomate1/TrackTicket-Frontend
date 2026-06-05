import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteConcertRequestDTO } from '@interfaces/fav-concert-request';
import { ConcertService } from '@services/concert-service';
import { FavConcertService } from '@services/fav-concert-service';
import { Session } from '@services/session';

@Component({
  selector: 'concert-page',
  imports: [],
  templateUrl: './concert-page.html',
  styleUrl: './concert-page.css',
})
export class ConcertPage {
  concertService = inject(ConcertService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  favConcert = inject(FavConcertService);
  sesion = inject(Session);

  ngOnInit() {
    const token = this.sesion.getToken();
    const id = this.route.snapshot.paramMap.get('id');

    this.concertService.getConcert(id!);

    if (token) {
      this.favConcert.isFavouriteConcert({
        token: token,
        idConcierto: id!,
      });
    }
  }

  changeFav() {
    const token = this.sesion.getToken();
    if (!token) {
      this.router.navigate(['/auth']);
      return;
    }

    const request: FavouriteConcertRequestDTO = {
      token: token,
      idConcierto: this.concertService.concert().idTicketMaster,
    };

    if (this.favConcert.isFav()) {
      this.favConcert.removeFavouriteConcert(request);
    } else {
      this.favConcert.addFavouriteConcert(request);
    }
  }
}
