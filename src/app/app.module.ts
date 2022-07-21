import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { Favourite, MovieDetailComponent } from './movie-detail/movie-detail.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Use forRoot to import the StarRatingModule
    StarRatingModule.forRoot()
  ],
  providers: [Favourite],
  bootstrap: [AppComponent]
})
export class AppModule { }
