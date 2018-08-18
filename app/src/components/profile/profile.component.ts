import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

  profile: string;

  constructor() {
    this.profile = 'comprador';
  }

  saveProfile() {

  }
  
  signout(){

  };

}
