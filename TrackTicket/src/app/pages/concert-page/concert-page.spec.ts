import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertPage } from './concert-page';

describe('ConcertPage', () => {
  let component: ConcertPage;
  let fixture: ComponentFixture<ConcertPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
