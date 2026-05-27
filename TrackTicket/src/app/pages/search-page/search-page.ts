import { Component } from '@angular/core';
import { SearchFormComponent } from '@components/search-page/search-form-component/search-form-component';
import { SearchResultList } from '@components/search-page/search-result-list/search-result-list';
@Component({
  selector: 'search-page',
  imports: [SearchFormComponent, SearchResultList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {

}
