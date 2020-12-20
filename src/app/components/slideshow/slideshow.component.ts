import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Movie } from '../../interfaces/nowplaying-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];
  public mySwiper: Swiper;
  urlBase: string = 'https://image.tmdb.org/t/p/original';

  constructor() {}
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(): void {}

  slideNext() {
    this.mySwiper.slideNext();
  }
  slidePrev() {
    this.mySwiper.slidePrev();
  }
}
