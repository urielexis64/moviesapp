import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/nowplaying-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getNowPlaying(): Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=d278c593d23e539bae7d6db38e2cbebd&language=es-ES&page=1`
    );
  }
}
