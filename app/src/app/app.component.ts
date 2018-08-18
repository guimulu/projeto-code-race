import { Token } from './../models/token/token.interface';
import { AuthProvider } from './../providers/auth/auth';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private auth: AuthProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let token = localStorage.getItem('token');
      if( token != null) {
        this.auth.revalidateToken(token)
          .then((token: Token) => {
            localStorage.setItem('token', token.token);
            this.rootPage = 'HomeTabsPage';
          })
          .catch((e) => {
            this.rootPage = 'SigninPage';
          });
      } else {
        this.rootPage = 'SigninPage';
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

