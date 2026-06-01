import { TestBed } from '@angular/core/testing';

import { ConcertSearch } from './concert-search';

describe('ConcertSearch', () => {
  let service: ConcertSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcertSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
