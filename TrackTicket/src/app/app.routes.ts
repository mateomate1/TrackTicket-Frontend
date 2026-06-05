import { Routes } from '@angular/router';
import { ArtistProfile } from './pages/artist-profile/artist-profile';
import { Favorites } from './pages/favorites/favorites';
import { SearchPage } from './pages/search-page/search-page';
import { AuthPage } from './pages/auth-page/auth-page';
import { authGuard } from './guards/auth-guard';
import { Notifications } from '@pages/notifications/notifications';
export const routes: Routes = [
  {
    path: 'search',
    component: SearchPage,
  },
  {
    path: 'notifications',
    component: Notifications, canActivate: [authGuard]
  },
  {
    path: 'favorites',
    component: Favorites, canActivate: [authGuard]
  },
  {
    path: 'artists/:nombre/:genero',
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
