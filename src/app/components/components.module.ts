import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PosterGridMoviesComponent } from './poster-grid-movies/poster-grid-movies.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PosterGridMoviesComponent,
  ],
  imports: [CommonModule, RouterModule, RatingModule],
  exports: [NavbarComponent, SlideshowComponent, PosterGridMoviesComponent],
})
export class ComponentsModule {}
