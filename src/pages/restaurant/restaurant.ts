import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  title: string;
  address: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.title = (this.navParams.get('title'));
    this.address = (this.navParams.get('address'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
    console.log(this.navParams.get('title'));
    //this.navCtrl.push(RestaurantPage, { item: data });
  }

  buyItem(food: string){
    let alert = this.alertCtrl.create({
      title: 'Confirm Purchase',
      message: 'Do you want to buy 1 portion of '+food+'?',
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
      title: 'Purchase Successful',
      subTitle: 'Please remember to pick up your '+item+' before the restaurant closes!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
