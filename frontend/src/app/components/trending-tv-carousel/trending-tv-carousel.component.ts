import { Component, OnInit } from '@angular/core';
import { TrendingTvCarouselServiceService } from './trending-tv-carousel-service.service';

@Component({
  selector: 'app-trending-tv-carousel',
  templateUrl: './trending-tv-carousel.component.html',
  styleUrls: ['./trending-tv-carousel.component.css']
})
export class TrendingTvCarouselComponent implements OnInit {

  public trendingTVShows: any = null;
  public trendingTVShowsFormatted: any;

  constructor(private service: TrendingTvCarouselServiceService) { }

  ngOnInit(): void {
    this.trendingTV();
  }

  trendingTV() {
    this.service.trendingTV().subscribe((response) => {
      this.trendingTVShows = response['trendingTV'];
      this.trendingTVShowsFormatted = [];
      let j = -1;

      for (var i = 0; i < this.trendingTVShows.length; i++) {
        if (i % 6 == 0) {
          j++;
          this.trendingTVShowsFormatted[j] = [];
          this.trendingTVShowsFormatted[j].push(this.trendingTVShows[i]);
        } else {
          this.trendingTVShowsFormatted[j].push(this.trendingTVShows[i]);
        }
      }
    }, (error) => {
      console.log('Error is ', error);
    })
  }

}
