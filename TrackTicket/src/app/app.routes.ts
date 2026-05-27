import { Routes } from '@angular/router';
import { ArtistProfile } from './pages/artist-profile/artist-profile';
import { Favorites } from './pages/favorites/favorites';

export const routes: Routes = [
    { path: 'favorites', component:Favorites},
    { path: 'artists/:id', component:ArtistProfile },
];
