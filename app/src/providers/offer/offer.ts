import { Offer } from './../../models/offer/offer.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OfferProvider {
  //private PATH: string = 'http://192.168.0.102:8080/coderaceapi-0.0.1-SNAPSHOT/';
  private PATH: string = 'http://192.168.0.100:8080/app/';
  private offer_url: string = 'offer/';

  constructor(private http: HttpClient) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.PATH}${this.offer_url}`)
        .subscribe((res: Offer[]) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    });
  }

  getOne(offer: Offer) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.PATH}${this.offer_url}${offer.id}`)
      .subscribe((res: Offer) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

  save(offer: Offer) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('token');

      this.http.post(`${this.PATH}${this.offer_url}`, { offer, token })
        .subscribe((res: Offer) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    });
  }

  delete(offer: Offer) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.PATH}${this.offer_url}${offer.id}`)
      .subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

}
