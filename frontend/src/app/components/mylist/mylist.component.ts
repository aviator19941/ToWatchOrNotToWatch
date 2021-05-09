import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  allLocalStorage: any = null;
  allLocalStorageLength: any = null;
  hasLocalStorage: boolean;
  data: any = null;
  dataFormatted: any = null;

  constructor() { }

  ngOnInit(): void {
    this.getAllLocalStorage();
  }

  getAllLocalStorage() {
    this.allLocalStorage = JSON.parse(localStorage.getItem('Items'));
    if (this.allLocalStorage != null) {
      this.allLocalStorageLength = this.allLocalStorage.length;
    
      if (this.allLocalStorageLength == 0) {
        this.hasLocalStorage = false;
      } else {
        this.hasLocalStorage = true;
      }

      this.data = this.allLocalStorage;
      this.dataFormatted = [];
      let j = -1;

      for (var i = 0; i < this.data.length; i++) {
        if (i % 6 == 0) {
          j++;
          this.dataFormatted[j] = [];
          this.dataFormatted[j].push(this.data[i]);
        } else {
          this.dataFormatted[j].push(this.data[i]);
        }
      }
    }
  }
  

}
