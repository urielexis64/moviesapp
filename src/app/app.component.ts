import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { NowPlayingResponse } from './interfaces/nowplaying-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private moviesService: MoviesService) {
    moviesService.getNowPlaying().subscribe((response) => {
      console.log(response);
    });
  }
}
