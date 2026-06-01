import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist';
import { ArtistsService } from '../../services/artists-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites implements OnInit {
  artists:Artist[]=[];

  constructor(private artistService: ArtistsService, private router: Router){}

  ngOnInit(): void {
    this.artists = this.artistService.getArtists();
  }

  seeArtistDetails(artist: Artist){
    this.router.navigate(['/artists', artist.id]);
  }
}
