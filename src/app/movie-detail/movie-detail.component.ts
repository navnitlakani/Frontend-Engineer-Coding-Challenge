import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { MovieDetail } from '../movie.model';
import { of } from 'rxjs';
import { movies } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieData$: Observable<MovieDetail>;
  constructor(private favourite: Favourite, private route: ActivatedRoute) {
      this.movieData$ =  of(movies[0]);
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    this.movieData$ = of(movies[id - 1]);
  }

  isFavourite() {
    return this.favourite.isFavourite()
  }

  toggleFavourite() {
    return this.favourite.toggleFavourite()
  }
}

export class Favourite {
  isFavorite = false;

  toggleFavourite() {
    this.isFavorite = !this.isFavorite;
  }

  isFavourite() {
    return this.isFavorite
  }

}
