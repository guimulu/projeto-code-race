import { User } from './../../models/user/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../../models/token/token.interface';

@Injectable()
export class AuthProvider {
  private PATH: string = 'http://192.168.0.102:8080/coderaceapi-0.0.1-SNAPSHOT/';
  private user_url: string = 'user/';
  private update_url: string = 'update/';
  private register_url: string = 'register/';
  private auth_url: string = 'auth/';
  private signout_url: string = 'signout/';
  private gen_token: string = 'generatetoken/';
  private headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient,) { }

  revalidateToken(token: string) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.PATH}${this.user_url}${this.auth_url}`, {'token': token }, {headers: this.headers})
        .subscribe((res: Token) => {
          localStorage.setItem('token', res.token);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  generateToken(user: User) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.PATH}${this.user_url}${this.gen_token}`, {'user': user}, {headers: this.headers})
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
      this.http.post(`${this.PATH}${this.user_url}${this.update_url}`, {
        'token': token,
        'user': user,
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
      this.http.post(`${this.PATH}${this.user_url}${this.register_url}`, user)
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
      this.http.post(`${this.PATH}${this.user_url}${this.signout_url}`, token)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
