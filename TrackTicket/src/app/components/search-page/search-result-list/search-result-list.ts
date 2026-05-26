import { Component, inject } from '@angular/core';
import { ConcertSearch } from '@services/concert-search';

@Component({
  selector: 'search-result-list',
  standalone: true,
  imports: [],
  templateUrl: './search-result-list.html',
  styleUrl: './search-result-list.css',
})
export class SearchResultList {
  concertSearch = inject(ConcertSearch)
}
