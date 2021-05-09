import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommendedCarouselServiceService {

  constructor(private http : HttpClient) { }

  rootUrl = '/api';

  details(category: string, id: string) {
    let params = new HttpParams();
    params = params.append('category', category);
    params = params.append('id', id);
    return this.http.get(this.rootUrl + '/details', { params: params });
  }
}
