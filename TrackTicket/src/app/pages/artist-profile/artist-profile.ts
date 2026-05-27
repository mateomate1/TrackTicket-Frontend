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
  artist?:Artist;

  constructor(private route:ActivatedRoute, private artistService:ArtistsService){}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.artist = this.artistService.getArtistById(id);
  }
}
