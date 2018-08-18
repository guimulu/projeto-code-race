import { Offer } from './../../models/offer/offer.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OfferProvider {
  private PATH:string = '';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.PATH}`)
        .subscribe((res: Offer[]) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    });
  }

  getOne(offer: Offer) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.PATH}`)
      .subscribe((res: Offer) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

  save(offer: Offer) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.PATH}`, { 'offer': offer })
        .subscribe((res: Offer) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    });
  }

  delete(offer: Offer) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.PATH}`, { 'offer': offer })
      .subscribe((res: Offer) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

}
