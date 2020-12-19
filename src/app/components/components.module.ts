import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PosterGridMoviesComponent } from './poster-grid-movies/poster-grid-movies.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PosterGridMoviesComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SlideshowComponent, PosterGridMoviesComponent],
})
export class ComponentsModule {}
