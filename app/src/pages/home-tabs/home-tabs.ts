import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html'
})
export class HomeTabsPage {

  homeRoot = 'HomePage'
  searchRoot = 'SearchPage'
  sellRoot = 'SellPage'
  profileRoot = 'ProfilePage'


  constructor(public navCtrl: NavController) {}

}
