import { FavouriteArtistService } from './../../services/fav-artist-service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from '@services/artist-service';
import { Session } from '@services/session';

@Component({
  selector: 'app-artist-profile',
  imports: [],
  templateUrl: './artist-profile.html',
  styleUrl: './artist-profile.css',
})
export class ArtistProfile {
  artistService = inject(ArtistService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  favArtist = inject(FavouriteArtistService);
  sesion = inject(Session);

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    const genero = this.route.snapshot.paramMap.get('genero');

    this.artistService.getArtist({
      artistName: nombre!,
      artistGenre: genero!,
    });

    const token = this.sesion.getToken();

    if (token) {
      this.favArtist.isFavouriteArtist({
        token: token,
        idArtist: nombre!,
        artistGenre: genero!,
      });
    }
  }

  changeFav() {
    const token = this.sesion.getToken();
    if (!token) {
      this.router.navigate(['/auth']);
      return;
    }

    const request = {
      token: token,
      idArtist: this.artistService.artist().idArtist,
      artistGenre: this.artistService.artist().genre,
    };

    console.log(this.artistService.artist().idArtist)

    if (this.favArtist.isFav()) {
      console.log("remove")
      this.favArtist.removeFavouriteArtist(request);
    } else {
      console.log("Add")
      console.log(request)
      this.favArtist.addFavouriteArtist(request);
    }
  }
}
