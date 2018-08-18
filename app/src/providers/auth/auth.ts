import { User } from './../../models/user/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../../models/token/token.interface';

@Injectable()
export class AuthProvider {
  //private PATH: string = 'http://192.168.0.102:8080/coderaceapi-0.0.1-SNAPSHOT/';
  //private PATH: string = 'http://localhost:8080/coderaceapi-0.0.1-SNAPSHOT/';
  private PATH: string = 'http://192.168.0.100:8080/app/';
  private user_url: string = 'user/';
  private update_url: string = 'update/';
  private register_url: string = 'register/';
  private auth_url: string = 'auth/';
  private signout_url: string = 'signout/';
  private gen_token: string = 'generatetoken/';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private profile_url: string = 'profile/';

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
      this.http.post(`${this.PATH}${this.user_url}${this.gen_token}`, user, {headers: this.headers})
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
      }, {headers: this.headers})
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  signUp(user: User) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.PATH}${this.user_url}${this.register_url}`, user, {headers: this.headers})
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
      this.http.post(`${this.PATH}${this.user_url}${this.signout_url}`, token, {headers: this.headers})
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getProfile() {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('token');
      this.http.post(`${this.PATH}${this.user_url}${this.profile_url}`, token, {headers: this.headers})
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    })
  }

}
