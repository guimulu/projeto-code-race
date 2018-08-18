import { User } from './../../models/user/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../../models/token/token.interface';

@Injectable()
export class AuthProvider {
  private PATH: string;

  constructor(private http: HttpClient,

  ) {

  }

  teste() {
    console.log('Entrou no auth');


    //let path = 'http://192.168.0.102:8080/coderaceapi-0.0.1-SNAPSHOT/user/generatetoken';
    let path = 'http://192.168.0.100:8080/app/user/generatetoken';
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    // let headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin' , '*');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // headers.append('Accept','application/json');
    // headers.append('content-type','application/json');
    // const httpOptions = {headers : headers};
    return new Promise((resolve, reject) => {
      this.http.post(`${path}`, {
        'login': 'angrymouse',
        'password': 'senha'
      }, {headers: headers})
        .subscribe((res) => {
          console.log('Entrou no resolve');
          resolve(res);
        }, (err) => {
          console.log('Entrou no reject');
          reject(err);
        });
    });
  }

  signIn(user: User) {
    return new Promise((resolve, reject) => {

      this.http.post(`${this.PATH}`, user)
        .subscribe((res: Token) => {
          localStorage.setItem('token', res.token);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  save(user: User) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('token');

      this.http.post(`${this.PATH}`, {
        token: token,
        user: user,
      })
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  signUp(user: User) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.PATH}`, user)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  signOut() {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('token');
      this.http.post(`${this.PATH}`, token)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
