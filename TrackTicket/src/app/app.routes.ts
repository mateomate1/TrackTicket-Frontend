import { Routes } from '@angular/router';
import { SearchPage } from './pages/search-page/search-page';
import { AuthPage } from './pages/auth-page/auth-page';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [
  {
    path: 'search',
    component: SearchPage,
  },
  {
    path: 'auth',
    component: AuthPage,
  },
  {
    path: '**',
    redirectTo: 'search',
  }
];