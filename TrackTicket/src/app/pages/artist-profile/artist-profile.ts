import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../../services/artists-service';

@Component({
  selector: 'app-artist-profile',
  imports: [],
  templateUrl: './artist-profile.html',
  styleUrl: './artist-profile.css',
})
export class ArtistProfile implements OnInit{
  artist?: Artist;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistsService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    const genre = this.route.snapshot.paramMap.get('genre');

    if (!name || !genre) return;

    this.artistService.getArtist(name, genre)
      .subscribe({
        next: artist => {
          this.artist = artist;
        },
        error: err => {
          console.error(err);
        }
      });
  }
}
