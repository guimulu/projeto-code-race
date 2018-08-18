import { HomePageModule } from './../../pages/home/home.module';
import { User } from './../../models/user/user.interface';
import { Component, Output, EventEmitter } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular/umd';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  user: User;
  profile: string;

  @Output() signoutStatus: EventEmitter<boolean>;

  constructor(private auth: AuthProvider, private toastCtrl: ToastController) {
    this.profile = 'comprador';
    this.signoutStatus = new EventEmitter<boolean>();
  }

  saveProfile() {
    this.auth.save(this.user)
      .then(() => {
        this.message('Perfil salvo com sucesso!');
      })
      .catch((e) => {
        this.message('Erro ao salvar perfil!');
      });
  }
  
  signout(){
    this.auth.signOut()
      .then(() => {
        this.signoutStatus.emit(true);
      });
  };

  message(message: string) {
    this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      message: message
    }).present();
  }
}
