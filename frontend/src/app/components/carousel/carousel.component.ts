import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../../carousel.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  tempImages = [];
  images = [];
  data = [];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  changeText = false;
  isMobile = false;
  showNavigationIndicators = true;
  
  constructor(private service : CarouselService, private breakpointObserver : BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
        this.showNavigationIndicators = false;
      } else {
        this.isMobile = false;
        this.showNavigationIndicators = true;
      }
    });
    this.nowPlaying();
  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  nowPlaying() {
    this.service.nowPlaying().subscribe((response) => {
      response['results'].forEach(element => {
        let curPath = element.backdrop_path;
        element.backdrop_path = 'https://image.tmdb.org/t/p/original' + curPath;
        this.data.push(element);
      });
    }, (error) => {
      console.log('Error is ', error);
    })
  }

}
