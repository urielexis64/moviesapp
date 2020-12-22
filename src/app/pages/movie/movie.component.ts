import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movies-details';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/cast-response';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: MovieDetails;
  cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.moviesService.getMovieDetail(id).subscribe((movie) => {
      if (movie) {
        this.movie = movie;
      } else {
        this.router.navigateByUrl('/home');
      }
    });

    this.moviesService.getCast(id).subscribe((cast) => {
      this.cast = cast;
    });
  }

  onBack() {
    this.location.back();
  }
}
