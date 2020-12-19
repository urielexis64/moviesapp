import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowplaying-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    console.log({ pos, max });
    if (pos >= max) {
      this.moviesService.getNowPlaying().subscribe((response) => {
        this.movies.push(...response.results);
      });
    }
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe((response) => {
      this.movies = response.results;
      this.moviesSlideshow = response.results.slice(0, 10);
    });
  }
}
