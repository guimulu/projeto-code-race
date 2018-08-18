import { Product } from './../../models/product/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';

@Injectable()
export class ProductProvider {
  private PATH:string = '';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.PATH}`)
        .subscribe((products: Product[]) => {
          resolve(products);
        }, (err) => {
          reject(err);
        })
    });
  }

  getOne(product: Product) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.PATH}${product.id}`)
      .subscribe((product: Product) => {
        resolve(product);
      }, (err) => {
        reject(err);
      })
    });
  }
  
}
