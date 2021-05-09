import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContinueWatchingCarouselServiceService {

  addContinueWatching(item) {
    let items = [];
    let itemsLength = 0;
    let dontSkip = false;
    if (localStorage.getItem('ContinueWatching')) {
      items = JSON.parse(localStorage.getItem('ContinueWatching'));
      itemsLength = items.length;
      if (itemsLength == 24) {
        items.forEach(it => {
          if (it.id == item.id) {
            dontSkip = true;
          }
        })
        if (dontSkip) {
          items = items.filter(it => it.id !== item.id);
        } else {
          items.pop();
          items = items.filter(it => it.id !== item.id);
        }
      } else {
        items = items.filter(it => it.id !== item.id);
      }
      items.unshift(item);
      
    } else {
      items.unshift(item);
    }
    localStorage.setItem('ContinueWatching', JSON.stringify(items));
  }
}
