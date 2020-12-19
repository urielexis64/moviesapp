import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/nowplaying-response';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private urlBase = 'https://api.themoviedb.org/3';
  private page: number = 1;
  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: 'd278c593d23e539bae7d6db38e2cbebd',
      language: 'es-ES',
      page: this.page.toString(),
    };
  }

  getNowPlaying(): Observable<NowPlayingResponse> {
    return this.http
      .get<NowPlayingResponse>(`${this.urlBase}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        tap(() => {
          this.page++;
        })
      );
  }
}
