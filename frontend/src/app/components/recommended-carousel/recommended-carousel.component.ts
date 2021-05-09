import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecommendedCarouselServiceService } from './recommended-carousel-service.service';

@Component({
  selector: 'app-recommended-carousel',
  templateUrl: './recommended-carousel.component.html',
  styleUrls: ['./recommended-carousel.component.css']
})
export class RecommendedCarouselComponent implements OnInit {
  public id: string;
  public category: string;
  public movieData: any = null;
  public recommended: any = null;
  public recommendedFormatted: any;
  public recommendedLength: any = null;

  constructor(private activeRoute : ActivatedRoute, private service : RecommendedCarouselServiceService) { }

  ngOnInit(): void {
    this.activeRoute.url.subscribe(val => {
      this.category = val[1].path;
      this.id = val[2].path;
      this.details(this.category, this.id);
    });
  }

  details(category: string, id:string ) {
    return this.service.details(category, id).subscribe((response) => {
      this.movieData = response;
      this.recommended = this.movieData.recommended;
      this.recommendedFormatted = [];
      let j = -1;

      for (var i = 0; i < this.recommended.length; i++) {
        if (i % 6 == 0) {
          j++;
          this.recommendedFormatted[j] = [];
          this.recommendedFormatted[j].push(this.recommended[i]);
        } else {
          this.recommendedFormatted[j].push(this.recommended[i]);
        }
      }

    }, (error) => {
      console.log('Error is ',  error);
    })
  }
}
