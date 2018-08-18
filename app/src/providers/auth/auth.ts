import { User } from './../../models/user/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthProvider {
  private PATH: string;

  constructor(private http: HttpClient,
              
  ) {
    
  }

  signIn(user: User) {
    return this.http.post(`${this.PATH}`, user);
  }

  edit(user: User) {
    return this.http.post(`${this.PATH}`, user);
  }

  signUp(user: User) {
    return this.http.post(`${this.PATH}`, user);
  }

  signOut() {
    //return this.http.post(`${this.PATH}`);
  }

}
