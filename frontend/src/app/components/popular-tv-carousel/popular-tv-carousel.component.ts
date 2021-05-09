import { Component, OnInit } from '@angular/core';
import { PopularTvCarouselServiceService } from './popular-tv-carousel-service.service';

@Component({
  selector: 'app-popular-tv-carousel',
  templateUrl: './popular-tv-carousel.component.html',
  styleUrls: ['./popular-tv-carousel.component.css']
})
export class PopularTvCarouselComponent implements OnInit {

  public popularTVShows: any = null;
  public popularTVShowsFormatted: any;

  constructor(private service: PopularTvCarouselServiceService) { }

  ngOnInit(): void {
    this.popularTV();
  }

  popularTV() {
    this.service.popularTV().subscribe((response) => {
      this.popularTVShows = response['popularTV'];
      this.popularTVShowsFormatted = [];
      let j = -1;

      for (var i = 0; i < this.popularTVShows.length; i++) {
        if (i % 6 == 0) {
          j++;
          this.popularTVShowsFormatted[j] = [];
          this.popularTVShowsFormatted[j].push(this.popularTVShows[i]);
        } else {
          this.popularTVShowsFormatted[j].push(this.popularTVShows[i]);
        }
      }
    }, (error) => {
      console.log('Error is ', error);
    })
  }

}
