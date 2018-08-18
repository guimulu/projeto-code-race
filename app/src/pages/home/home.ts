import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  title: string = 'Bem Vindo!';
  transacao: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private auth: AuthProvider
  ) {
    this.transacao = "compras";
  }

  ionViewDidLeave(){
    this.title = 'Início';
  }

  teste() {
    console.log('Entrou no ts');
    this.auth.teste()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

}
