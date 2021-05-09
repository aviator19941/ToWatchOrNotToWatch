import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopularCarouselServiceService {

  constructor(private http : HttpClient) { }
  
  rootUrl = '/api';

  popularMovies() {
    return this.http.get(this.rootUrl + '/popularMovies');
  }
}
