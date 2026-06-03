import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteArtists } from './favorite-artists';

describe('FavoriteArtists', () => {
  let component: FavoriteArtists;
  let fixture: ComponentFixture<FavoriteArtists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteArtists],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteArtists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
