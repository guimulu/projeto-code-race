import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  title: string = 'Bem Vindo!';
  transacao: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transacao = "compras";
  }

  ionViewDidLeave(){
    this.title = 'Início';
  }

}
