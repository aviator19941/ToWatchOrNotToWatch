import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) { }

  rootUrl = '/api';

  multiSearch(query: string) {
    if (query === '') {
      return of([]);
    }

    return this.http.post<any>(this.rootUrl + '/multiSearch', { query });
  }
}
