import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowplaying-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster-grid-movies',
  templateUrl: './poster-grid-movies.component.html',
  styleUrls: ['./poster-grid-movies.component.css'],
})
export class PosterGridMoviesComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.movies);
  }

  showMovie(id: string) {
    this.router.navigate(['/movie', id]);
  }
}
