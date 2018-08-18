import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {

  query: string;
  products: string[];

  constructor() {

  }

  searchProduct() {
    this.products.push(this.query);
  }

  selectProduct() {
    
  }

}
