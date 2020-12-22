import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, NowPlayingResponse } from '../interfaces/nowplaying-response';
import { tap, map, catchError } from 'rxjs/operators';
import { MovieDetails } from '../interfaces/movies-details';
import { Cast, CastResponse } from '../interfaces/cast-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private urlBase = 'https://api.themoviedb.org/3';
  private page: number = 1;
  public loading: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: 'd278c593d23e539bae7d6db38e2cbebd',
      language: 'es-ES',
      page: this.page.toString(),
    };
  }

  resetPage() {
    this.page = 1;
  }

  getNowPlaying(): Observable<Movie[]> {
    if (this.loading) return of([]);

    this.loading = true;

    return this.http
      .get<NowPlayingResponse>(`${this.urlBase}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((response) => response.results),
        tap(() => {
          this.page++;
          this.loading = false;
        })
      );
  }

  searchMovies(text: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: text };

    return this.http
      .get<NowPlayingResponse>(`${this.urlBase}/search/movie`, {
        params,
      })
      .pipe(map((response) => response.results));
  }

  getMovieDetail(id: string) {
    return this.http
      .get<MovieDetails>(`${this.urlBase}/movie/${id}`, {
        params: this.params,
      })
      .pipe(catchError((err) => of(null)));
  }

  getCast(movieId: string): Observable<Cast[]> {
    return this.http
      .get<CastResponse>(`${this.urlBase}/movie/${movieId}/credits`, {
        params: this.params,
      })
      .pipe(
        map((response) => response.cast),
        catchError((err) => of([]))
      );
  }
}
