import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { SearchFormComponent } from './search-form-component/search-form-component';

@Component({
  selector: 'search-page',
  imports: [SearchFormComponent],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {

}
