import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  addItem(){
    console.log('Add a new item');
    this.navCtrl.push(AddPage);
  }

  requestItem(food: string){
    let alert = this.alertCtrl.create({
      title: 'Confirm Request',
      message: 'Do you want to request '+food+'?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.confirmAlert(food);
            console.log('Confirm clicked');
          }
        }
      ]
    });
    alert.present();
  }

  confirmAlert(item: string) {
    let alert = this.alertCtrl.create({
      title: 'Request Sent',
      subTitle: 'Request for '+item+' successfully sent!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
