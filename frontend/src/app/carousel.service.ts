import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http : HttpClient) { }

  rootUrl = '/api';

  nowPlaying() {
    return this.http.get(this.rootUrl + '/nowPlaying');
  }
}
