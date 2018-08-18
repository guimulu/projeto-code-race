import { User } from './../../models/user/user.interface';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: User;

  constructor(private navCtrl: NavController, private auth: AuthProvider,
    private toastCtrl: ToastController
  ) {
  }

  signin() {
    this.auth.generateToken(this.user)
      .then((res) => {
        this.navCtrl.push('HomeTabsPage');
      })
      .catch((e) => {
        this.toastCtrl.create({
          position: 'bottom',
          duration: 3000,
          message: 'Erro ao fazer login, verifique suas credenciais!'
        }).present();
      });
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

}
