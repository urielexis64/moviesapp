import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/nowplaying-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  currentSearch: string;
  loading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.loading = true;
    activatedRoute.params.subscribe((params) => {
      //TODO: call service
      this.currentSearch = params.text;
      moviesService.searchMovies(params.text).subscribe((response) => {
        this.movies = response;
        this.loading = false;
      });
    });
  }

  ngOnInit(): void {}
}
