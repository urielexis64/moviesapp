import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowplaying-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    if (pos >= max) {
      if (!this.moviesService.loading) {
        this.moviesService.getNowPlaying().subscribe((movies) => {
          this.movies.push(...movies);
        });
      }
    }
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlideshow = movies.slice(0, 10);
    });
  }
  ngOnDestroy(): void {
    this.moviesService.resetPage();
  }
}
