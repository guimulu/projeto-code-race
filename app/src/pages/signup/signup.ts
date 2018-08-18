import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user/user.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth : AuthProvider) {

  }

  register() {
    this.auth.signUp(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
