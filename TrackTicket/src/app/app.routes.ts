import { Routes } from '@angular/router';
import { SearchPage } from './pages/search-page/search-page';

export const routes: Routes = [
  {
    path: 'search',
    component: SearchPage,
  },
  {
    path: '**',
    redirectTo: 'search',
  }
];
