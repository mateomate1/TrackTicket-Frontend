import { Component } from '@angular/core';
import { SearchFormComponent } from '@components/search-page/search-form-component/search-form-component';
import { SearchResultList } from '@components/search-page/search-result-list/search-result-list';
import { MapComponent } from "@components/map-component/map-component";
//import { MapComponent } from "src/app/components/map-component/map-component";
@Component({
  selector: 'search-page',
  imports: [SearchFormComponent, SearchResultList, MapComponent],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {

}
