import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendingTvCarouselServiceService {

  constructor(private http : HttpClient) { }
  
  rootUrl = '/api';

  trendingTV() {
    return this.http.get(this.rootUrl + '/trendingTV');
  }
}
