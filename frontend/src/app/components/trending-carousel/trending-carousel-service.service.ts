import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendingCarouselServiceService {

  constructor(private http : HttpClient) { }
  
  rootUrl = '/api';

  trendingMovies() {
    return this.http.get(this.rootUrl + '/trendingMovies');
  }
}
