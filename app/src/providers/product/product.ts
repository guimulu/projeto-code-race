import { Product } from './../../models/product/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductProvider {
  private PATH: string = 'http://192.168.0.102:8080/coderaceapi-0.0.1-SNAPSHOT/';
  private product_url: string = 'product/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.PATH}${this.product_url}`)
        .subscribe((products: Product[]) => {
          resolve(products);
        }, (err) => {
          reject(err);
        })
    });
  }

  getOne(product: Product) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.PATH}${this.product_url}${product.id}`)
      .subscribe((product: Product) => {
        resolve(product);
      }, (err) => {
        reject(err);
      })
    });
  }
  
}
