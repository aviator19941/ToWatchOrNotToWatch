import { Component, OnInit } from '@angular/core';
import { PopularCarouselServiceService } from './popular-carousel-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-popular-carousel',
  templateUrl: './popular-carousel.component.html',
  styleUrls: ['./popular-carousel.component.css']
})
export class PopularCarouselComponent implements OnInit {
  public data: any = null;
  public dataFormatted: any;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  isMobile = false;

  constructor(private service: PopularCarouselServiceService, private breakpointObserver : BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
      } else {
        this.isMobile = false;
      }
      this.popularMovies();

      if (this.data != null) {
        if (this.isMobile) {
          if (this.data.length < 2) {
            this.showNavigationArrows = false;
            this.showNavigationIndicators = false;
          } else {
            this.showNavigationArrows = true;
            this.showNavigationIndicators = false;
          }
        } else {
          this.showNavigationArrows = true;
          this.showNavigationIndicators = true;
        }
      }
    });
  }

  popularMovies() {
    this.service.popularMovies().subscribe((response) => {
      this.data = response['popularMovies'];
      this.dataFormatted = [];
      let j = -1;

      for (var i = 0; i < this.data.length; i++) {
        if (i % 6 == 0) {
          j++;
          this.dataFormatted[j] = [];
          this.dataFormatted[j].push(this.data[i]);
        } else {
          this.dataFormatted[j].push(this.data[i]);
        }
      }
    }, (error) => {
      console.log('Error is ', error);
    })
  }

}
