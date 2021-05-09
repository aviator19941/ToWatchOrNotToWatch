import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopratedCarouselServiceService {

  constructor(private http : HttpClient) { }
  
  rootUrl = '/api';

  topRatedMovies() {
    return this.http.get(this.rootUrl + '/topRatedMovies');
  }
}
