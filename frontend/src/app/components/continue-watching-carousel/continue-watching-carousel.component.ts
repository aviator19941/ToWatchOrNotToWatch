import { Component, OnInit } from '@angular/core';
import { ContinueWatchingCarouselServiceService } from './continue-watching-carousel-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-continue-watching-carousel',
  templateUrl: './continue-watching-carousel.component.html',
  styleUrls: ['./continue-watching-carousel.component.css']
})
export class ContinueWatchingCarouselComponent implements OnInit {
  public data: any = null;
  public dataFormatted: any;
  allLocalStorage: any = null;
  allLocalStorageLength: any = null;
  hasLocalStorage: boolean;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  isMobile = false;

  constructor(private service : ContinueWatchingCarouselServiceService, private breakpointObserver : BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
        this.showNavigationArrows = true;
      } else {
        this.isMobile = false;
      }

      this.getAllLocalStorage();
      if (this.data != null) {
        if (this.isMobile == false) {
          if (this.data.length < 7) {
            this.showNavigationArrows = false;
            this.showNavigationIndicators = false;
          } else {
            this.showNavigationArrows = true;
            this.showNavigationIndicators = true;
          }
        } else {
          if (this.data.length < 2) {
            this.showNavigationArrows = false;
            this.showNavigationIndicators = false;
          } else {
            this.showNavigationArrows = true;
            this.showNavigationIndicators = false;
          }
        }
      }
    });

    
  }

  getAllLocalStorage() {
    this.allLocalStorage = JSON.parse(localStorage.getItem('ContinueWatching'));
    if (this.allLocalStorage != null) {
      this.allLocalStorageLength = this.allLocalStorage.length;
    
      if (this.allLocalStorageLength == 0) {
        this.hasLocalStorage = false;
      } else {
        this.hasLocalStorage = true;
      }

      this.data = this.allLocalStorage;
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
      
    }
  }

}
