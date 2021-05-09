import { Component, OnInit } from '@angular/core';
import { TopratedCarouselServiceService } from './toprated-carousel-service.service'

@Component({
  selector: 'app-toprated-carousel',
  templateUrl: './toprated-carousel.component.html',
  styleUrls: ['./toprated-carousel.component.css']
})
export class TopratedCarouselComponent implements OnInit {

  public topRated: any = null;
  public topRatedFormatted: any;

  constructor(private service: TopratedCarouselServiceService) { }

  ngOnInit(): void {
    this.topRatedMovies();
  }

  topRatedMovies() {
    this.service.topRatedMovies().subscribe((response) => {
      this.topRated = response['topRatedMovies'];
      this.topRatedFormatted = [];
      let j = -1;

      for (var i = 0; i < this.topRated.length; i++) {
        if (i % 6 == 0) {
          j++;
          this.topRatedFormatted[j] = [];
          this.topRatedFormatted[j].push(this.topRated[i]);
        } else {
          this.topRatedFormatted[j].push(this.topRated[i]);
        }
      }
    }, (error) => {
      console.log('Error is ', error);
    })
  }

}
