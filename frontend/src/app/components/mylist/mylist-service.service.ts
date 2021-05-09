import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MylistServiceService {

  constructor() { }

  addItem(item) {
    let items = [];
    if (localStorage.getItem('Items')) {
      items = JSON.parse(localStorage.getItem('Items'));
      items.unshift(item);
    } else {
      items.unshift(item);
    }
    localStorage.setItem('Items', JSON.stringify(items));
  }

  removeItem(item) {
    let curId = item.id;
    let items = [];
    items = JSON.parse(localStorage.getItem('Items'));
    items = items.filter(item => item.id !== curId);
    localStorage.setItem('Items', JSON.stringify(items));
  }
}
