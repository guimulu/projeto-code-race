import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user/user.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as User;

  constructor(private navCtrl: NavController, private auth : AuthProvider,
  private toastCtrl: ToastController
  ) {

  }

  register() {
    this.auth.signUp(this.user)
      .then(() => {
        this.navCtrl.pop();
        this.message('Cadastrado com sucesso!');
      })
      .catch(() => {
        this.message('Erro ao cadastrar, verifique os campos inseridos!');
      });
  }

  message(message: string) {
    this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      message: message
    }).present();
  }

}
