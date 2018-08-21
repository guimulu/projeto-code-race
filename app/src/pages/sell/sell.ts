import { OfferProvider } from './../../providers/offer/offer';
import { ProductProvider } from './../../providers/product/product';
import { Unit } from './../../models/unit/unit.interface';
import { Product } from './../../models/product/product.interface';
import { User } from './../../models/user/user.interface';
import { Offer } from './../../models/offer/offer.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {
  offer = {} as Offer;
  user: User;
  products: Product[];
  units: Unit[];

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private auth: AuthProvider, private product: ProductProvider, private offProv: OfferProvider,
    private toastCtrl: ToastController
  ) {
    this.product.getAll()
      .then((res: Product[]) => {
        this.products = res;
      });
    this.product.getUnit()
      .then((res: Unit[]) => {
        this.units = res;
      });
  }

  ionViewWillEnter(){
    this.auth.getProfile()
    .then((res:User) => {
      this.user = res;
    })
    .catch((err) => {});
  }

  selectProduct(product: Product) {
    this.offer.product = product;
  }

  selectUnit(unit: Unit) {
    this.offer.unit = unit;
  }


  inserirOffer() {
    this.offProv.save(this.offer)
      .then((res) => {
        this.toastCtrl.create({
          position: 'bottom',
          duration: 3000,
          message: 'Cadastrado com sucesso!'
        })
      })
      .catch();
  }



}
