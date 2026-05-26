import { FormsModule } from '@angular/forms';
import { Component, inject, signal } from '@angular/core';
import { searchRequest } from '@interfaces/concert-search-request';
import { ConcertSearch } from '@services/concert-search';

@Component({
  selector: 'search-form-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-form-component.html',
  styleUrl: './search-form-component.css',
})
export class SearchFormComponent {
  concertSearch = inject(ConcertSearch);

  startDate = signal('');
  endDate = signal('');
  artist = signal('');
  location = signal('');

  searchConcerts() {
    console.log('Se ejecuto la busqueda');
    const request: searchRequest = {
      startDate: (this.startDate() || new Date().toISOString().split('T')[0]) + 'T00:00:00',
      finalDay: this.endDate() ? this.endDate() + 'T23:59:59' : undefined,
      artist: this.artist() || undefined,
      location: this.location() || undefined,
    };
    console.log(request);

    this.concertSearch.getConcerts(request);
    console.log(this.concertSearch.concerts());
  }
}
