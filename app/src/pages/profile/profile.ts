import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(private navCtrl: NavController) {
  }

  signout() {
    this.navCtrl.setRoot('SigninPage');
  }

}
