import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { Favourite, MovieDetailComponent } from './movie-detail.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1, // represents the bookId
              },
            },
          },
        },
        Favourite
      ],
      declarations: [ MovieDetailComponent ]
    })


    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it(`Should be unfavourite initially'`, () => {
    expect(component.isFavourite()).toEqual(false);
  });

  it(`Should set as favourite'`, () => {
    component.toggleFavourite()
    expect(component.isFavourite()).toEqual(true);
  });
});
