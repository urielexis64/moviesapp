import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowplaying-response';

@Component({
  selector: 'app-poster-grid-movies',
  templateUrl: './poster-grid-movies.component.html',
  styleUrls: ['./poster-grid-movies.component.css'],
})
export class PosterGridMoviesComponent implements OnInit {
  @Input() movies: Movie[];
  math = Math;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }
}
