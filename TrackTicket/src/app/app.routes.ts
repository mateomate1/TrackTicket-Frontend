import { Routes } from '@angular/router';
import { ArtistProfile } from './pages/artist-profile/artist-profile';
import { Favorites } from './pages/favorites/favorites';
import { SearchPage } from './pages/search-page/search-page';
import { AuthPage } from './pages/auth-page/auth-page';
export const routes: Routes = [
  {
    path: 'search',
    component: SearchPage,
  },
  {
    path: 'favorites',
    component: Favorites,
  },
  {
    path: 'artists/:nombre',
    component: ArtistProfile,
  },
  {
    path: 'auth',
    component: AuthPage,
  },
  {
    path: '**',
    redirectTo: 'search',
  },
];
