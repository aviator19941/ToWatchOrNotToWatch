import { Component, OnInit } from '@angular/core';
import { TrendingCarouselServiceService } from './trending-carousel-service.service';

@Component({
  selector: 'app-trending-carousel',
  templateUrl: './trending-carousel.component.html',
  styleUrls: ['./trending-carousel.component.css']
})
export class TrendingCarouselComponent implements OnInit {

  public trending: any = null;
  public trendingFormatted: any;

  constructor(private service: TrendingCarouselServiceService) { }

  ngOnInit(): void {
    this.topRatedMovies();
  }

  topRatedMovies() {
    this.service.trendingMovies().subscribe((response) => {
      this.trending = response['trendingMovies'];
      this.trendingFormatted = [];
      let j = -1;

      for (var i = 0; i < this.trending.length; i++) {
        if (i % 6 == 0) {
          j++;
          this.trendingFormatted[j] = [];
          this.trendingFormatted[j].push(this.trending[i]);
        } else {
          this.trendingFormatted[j].push(this.trending[i]);
        }
      }
    }, (error) => {
      console.log('Error is ', error);
    })
  }
}
