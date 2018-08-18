import { Product } from './../../models/product/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unit } from '../../models/unit/unit.interface';

@Injectable()
export class ProductProvider {
  //private PATH: string = 'http://192.168.0.102:8080/coderaceapi-0.0.1-SNAPSHOT/';
  private PATH: string = 'http://192.168.0.100:8080/app/';
  private product_url: string = 'product/';
  private unit_url: string = 'unit/';

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

  getUnit() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.PATH}${this.product_url}${this.unit_url}`)
      .subscribe((unit: Unit[]) => {
        resolve(unit);
      }, (err) => {
        reject(err);
      })
    });
  }

}
