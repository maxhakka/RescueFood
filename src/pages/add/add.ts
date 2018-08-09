import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  share = {
    title: '',
    description: '',
    vegan: 'false',
    vegetarian: 'false',
    lactoseFree: 'false',
    glutenFree: 'false',
    time: '12:00'
  };

  logForm(form) {
    let alert = this.alertCtrl.create({
      title: 'Congratulations!',
      subTitle: 'You shared'+form.value.title+' with other users of the application',
      buttons: ['Dismiss']
    });
    alert.present();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
