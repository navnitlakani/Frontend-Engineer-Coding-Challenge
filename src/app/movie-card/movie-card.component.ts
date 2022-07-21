import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { MovieDetail } from '../movie.model';
import { of } from 'rxjs';
import { movies } from '../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  private movieData!: Observable<MovieDetail[]>;

  ngOnInit() {
    this.movieData = of(movies);
    this.movieData.subscribe((val) => console.log(val));
  }

  getMovieData() {
    return this.movieData;
  }

  drop(ev: any) {
console.log(ev.target.className)
  if ( ev.target.className !== "row watched-main" ) {
    return;
  }

    ev.preventDefault();
    var data = ev.dataTransfer.getData("img-id");
    let div = 'movie_' + data;
    ev.target.appendChild(document.getElementById(div));
  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drag(ev: any) {
    console.log(ev.target.getAttribute('img-id'))
   // alert(ev.target.id)
    ev.dataTransfer.setData("img-id", ev.target.getAttribute('img-id'));
  }
}


