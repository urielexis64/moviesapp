import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster',
})
export class PosterPipe implements PipeTransform {
  private urlBase = 'https://image.tmdb.org/t/p/w500/';
  transform(poster: string): string {
    return poster ? this.urlBase + poster : './assets/no-image.jpg';
  }
}
