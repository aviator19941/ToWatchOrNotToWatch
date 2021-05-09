import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './movie.service';
import { NgbModal, ModalDismissReasons, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { MylistServiceService } from '../mylist/mylist-service.service';
import { ContinueWatchingCarouselServiceService } from '../continue-watching-carousel/continue-watching-carousel-service.service';
import { ContinueWatchingCarouselComponent } from '../continue-watching-carousel/continue-watching-carousel.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public id: string;
  public category: string;
  public movieData: any = null;
  public videoId: string = null;
  public runtime: string = null;
  public genres: string = "";
  public spokenLanguages: string = "";
  public genresLength: any;
  public spokenLanguagesLength: any;
  public twitterText: string = "";
  public titleText: string = "";
  public twitterYoutubeLink: string = "";
  public castMembers: any;
  closeResult = '';
  public personData: any = null;
  public personName: string = null;
  public personImage: string = null;
  public birthday: string = null;
  public birthplace: string = null;
  public gender: string = null;
  public knownFor: string = null;
  public otherNames: string = null;
  public biography: string = null;
  public website: string = null;

  public imdb: string = null;
  public insta: string = null;
  public fb: string = null;
  public twitter: string = null;

  public reviews: any = null;
  public reviewsLength: any = null;
  public castLength: any = null;
  public similarLength: any = null;
  public recommendedLength: any = null;
  item: any = {};

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';
  toggleWatchlist = false;
  add = true;

  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(private activeRoute : ActivatedRoute, private service : MovieService, private modalService: NgbModal, private mylistService : MylistServiceService, private continueWatchingService : ContinueWatchingCarouselServiceService) { }

  ngOnInit(): void {
    
    this.activeRoute.url.subscribe(val => {
      window.scroll(0, 0);
      this.category = val[1].path;
      this.id = val[2].path;
      let itemStorage = JSON.parse(localStorage.getItem('Items'));
      this.toggleWatchlist = false;
      if (itemStorage != null) {
        itemStorage.forEach(item => {
          if (item.id == this.id) {
            this.toggleWatchlist = item.toggleWatchlist;
          }
        });
      }

      this.details(this.category, this.id);
    });

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public changeSuccessMessage() {
    if (this.toggleWatchlist) {
      let id = this.movieData.detailsData.id;
      let title = this.movieData.detailsData.title;
      let poster_path = this.movieData.detailsData.poster_path;
      this.toggleWatchlist = !this.toggleWatchlist;
      this.item = {
        "id" : id,
        "category" : this.category,
        "title" : title,
        "poster_path" : poster_path,
        "toggleWatchlist" : this.toggleWatchlist
      }
      this.mylistService.removeItem(this.item);
      this.add = false;
      this._success.next(`Removed from watchlist.`);
    } else {
      // add clicked object to local storage
      let id = this.movieData.detailsData.id;
      let title = this.movieData.detailsData.title;
      let poster_path = this.movieData.detailsData.poster_path;
      this.toggleWatchlist = !this.toggleWatchlist;
      this.item = {
        "id" : id,
        "category" : this.category,
        "title" : title,
        "poster_path" : poster_path,
        "toggleWatchlist" : this.toggleWatchlist
      }
      this.mylistService.addItem(this.item);
      this.add = true;
      this._success.next(`Added to watchlist.`);
    }
  }

  details(category: string, id:string ) {
    return this.service.details(category, id).subscribe((response) => {
      this.movieData = response;

      let id = this.movieData.detailsData.id;
      let title = this.movieData.detailsData.title;
      let poster_path = this.movieData.detailsData.poster_path;
      this.item = {
        "id" : id,
        "category" : "movie",
        "title" : title,
        "poster_path" : poster_path
      }
      this.continueWatchingService.addContinueWatching(this.item);
      
      this.titleText = this.movieData.detailsData.title;
      this.twitterText = encodeURIComponent("Watch " + this.titleText + "\n");
      this.twitterYoutubeLink = "https://www.youtube.com/watch?v=" + this.movieData.video.key + "%0A";
      this.castMembers = this.movieData.cast;
      this.reviews = this.movieData.reviews;

      this.reviews.forEach(review => {
        if (review.avatar_path == null) {
          review.avatar_path = "assets/reviews-placeholder.jpg";
        }
      });
      this.reviewsLength = this.reviews.length;
      this.castLength = this.castMembers.length;
      if (this.reviewsLength == 0) {
        this.reviewsLength = null;
      }
      if (this.castLength == 0) {
        this.castLength = null;
      }

      this.similarLength = this.movieData.similar.length;
      this.recommendedLength = this.movieData.recommended.length;
      if (this.similarLength == 0) {
        this.similarLength = null;
      }
      if (this.recommendedLength == 0) {
        this.recommendedLength = null;
      }

      let apiRuntime = this.movieData.detailsData.runtime;
      let hours = Math.floor(apiRuntime / 60);
      let mins = apiRuntime % 60;
      if (hours == 1 && mins == 0) {
        this.runtime = hours + "hr";
      } else if (hours >= 1 && mins > 0) {
        this.runtime = hours + "hrs " + mins + "mins";
      } else if (hours < 1 && mins > 0) {
        this.runtime = mins + "mins";
      } 
      
      let apiGenres = this.movieData.detailsData.genres;
      this.genres = "";
      this.spokenLanguages = "";
      let ndx = 0;
      apiGenres.forEach(genre => {
        let curGenre = genre.name;
        if (ndx == apiGenres.length - 1) {
          this.genres += curGenre;
        } else {
          this.genres += curGenre + ", ";
        }
        ndx += 1;
      });
      if (apiGenres.length == 0) {
        this.genresLength = null;
      } else {
        this.genresLength = apiGenres.length;
      }

      ndx = 0;
      let apiLanguages = this.movieData.detailsData.spoken_languages;
      apiLanguages.forEach(language => {
        let curLanguage = language.english_name;
        if (ndx == apiLanguages.length - 1) {
          this.spokenLanguages += curLanguage;
        } else {
          this.spokenLanguages += curLanguage + ", ";
        }
        ndx += 1;
      });
      if (apiLanguages.length == 0) {
        this.spokenLanguagesLength = null;
      } else {
        this.spokenLanguagesLength = apiLanguages.length;
      }
    }, (error) => {
      console.log('Error is ',  error);
    })
  }

  open(castId, content) {
    this.service.modalDetails(castId).subscribe((response) => {
      this.personData = response;

      this.personName = this.personData.person.name;
      this.personImage = this.personData.person.profile_path;
      this.birthday = this.personData.person.birthday;
      this.birthplace = this.personData.person.place_of_birth;
      this.gender = this.personData.person.gender;
      this.website = this.personData.person.homepage;
      this.knownFor = this.personData.person.known_for_department;
      this.otherNames = this.personData.person.also_known_as;
      this.biography = this.personData.person.biography;

      this.imdb = this.personData.external_ids.imdb_id;
      this.insta = this.personData.external_ids.instagram_id;
      this.fb = this.personData.external_ids.facebook_id;
      this.twitter = this.personData.external_ids.twitter_id;
      
    }, (error) => {
      console.log('Error is ', error);
    })

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size : 'lg', centered : true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.personData = null;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  
}
