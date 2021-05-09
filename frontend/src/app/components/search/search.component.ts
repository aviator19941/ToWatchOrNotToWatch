import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results = [];
  searchTextInput = new FormControl();
  showDropdown = false;
  model: any;
  filterName: string;
  selected = [];

  constructor(private searchService : SearchService) { }

  ngOnInit(): void {
    this.searchTextInput.valueChanges
    .subscribe(query => this.searchService.multiSearch(query)
    .subscribe(response => this.results = response.results)
    );
  }

  search: OperatorFunction<string, readonly {id, name, media_type, backdrop_path}[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      map(query => query === '' ? []
        : (this.results == [] || this.results == undefined) ? [] : this.results.filter(v => v.name.toLowerCase().indexOf(query.toLowerCase()) > -1 || v.name.toLowerCase().indexOf(query.toLowerCase()) <= -1))
    )

  formatter = (x: {name: string}) => x.name;

  onSelect($event, input) {
    $event.preventDefault();
    this.selected.push($event.item);
    input.value = '';
  }
}
