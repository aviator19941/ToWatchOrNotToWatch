import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopularTvCarouselServiceService {

  constructor(private http : HttpClient) { }
  
  rootUrl = '/api';

  popularTV() {
    return this.http.get(this.rootUrl + '/popularTV');
  }
}
