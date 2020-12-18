import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowplaying-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe((response) => {
      this.movies = response.results;
    });
  }
}
