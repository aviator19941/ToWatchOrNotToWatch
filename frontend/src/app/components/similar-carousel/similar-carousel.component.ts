import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimilarCarouselServiceService } from './similar-carousel-service.service';

@Component({
  selector: 'app-similar-carousel',
  templateUrl: './similar-carousel.component.html',
  styleUrls: ['./similar-carousel.component.css']
})
export class SimilarCarouselComponent implements OnInit {
  public id: string;
  public category: string;
  public movieData: any = null;
  public similar: any = null;
  public similarFormatted: any;
  public similarLength: any;

  constructor(private activeRoute : ActivatedRoute, private service : SimilarCarouselServiceService) { }

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
      this.similar = this.movieData.similar;
      this.similarFormatted = [];
      let j = -1;

      for (var i = 0; i < this.similar.length; i++) {
        if (i % 6 == 0) {
          j++;
          this.similarFormatted[j] = [];
          this.similarFormatted[j].push(this.similar[i]);
        } else {
          this.similarFormatted[j].push(this.similar[i]);
        }
      }

    }, (error) => {
      console.log('Error is ',  error);
    })
  }
}
