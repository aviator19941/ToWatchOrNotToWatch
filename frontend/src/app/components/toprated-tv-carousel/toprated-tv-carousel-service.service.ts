import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopratedTvCarouselServiceService {

  constructor(private http : HttpClient) { }
  
  rootUrl = '/api';

  topRatedTV() {
    return this.http.get(this.rootUrl + '/topRatedTV');
  }
}
