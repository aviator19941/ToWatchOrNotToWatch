import { Component, OnInit } from '@angular/core';
import { TopratedTvCarouselServiceService } from './toprated-tv-carousel-service.service';

@Component({
  selector: 'app-toprated-tv-carousel',
  templateUrl: './toprated-tv-carousel.component.html',
  styleUrls: ['./toprated-tv-carousel.component.css']
})
export class TopratedTvCarouselComponent implements OnInit {

  public topRatedTVShows: any = null;
  public topRatedTVShowsFormatted: any;

  constructor(private service: TopratedTvCarouselServiceService) { }

  ngOnInit(): void {
    this.topRatedTV();
  }

  topRatedTV() {
    this.service.topRatedTV().subscribe((response) => {
      this.topRatedTVShows = response['topRatedTV'];
      this.topRatedTVShowsFormatted = [];
      let j = -1;

      for (var i = 0; i < this.topRatedTVShows.length; i++) {
        if (i % 6 == 0) {
          j++;
          this.topRatedTVShowsFormatted[j] = [];
          this.topRatedTVShowsFormatted[j].push(this.topRatedTVShows[i]);
        } else {
          this.topRatedTVShowsFormatted[j].push(this.topRatedTVShows[i]);
        }
      }
    }, (error) => {
      console.log('Error is ', error);
    })
  }

}
