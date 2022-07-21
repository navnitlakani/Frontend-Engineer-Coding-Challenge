import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieCardComponent } from "./movie-card/movie-card.component";

import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
  { path: "", component: MovieCardComponent },
  { path: "movie-detail", component: MovieDetailComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
