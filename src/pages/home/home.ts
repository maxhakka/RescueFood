import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantPage } from '../restaurant/restaurant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  visible: boolean;
  visible2: boolean;
  visible3: boolean;
  visible4: boolean;

  constructor(public navCtrl: NavController) {
    this.visible = false;
    this.visible2 = false;
    this.visible3 = false;
    this.visible4 = false;
  }

  nextPage(){
    this.navCtrl.push(RestaurantPage);
  }

  toggle(restaurang: number) {
    if (restaurang == 1) {
      this.visible = !this.visible;
    }
    if (restaurang == 2) {
      this.visible2 = !this.visible2;
    }
    if (restaurang == 3) {
      this.visible3 = !this.visible3;
    }
    if (restaurang == 4) {
      this.visible4 = !this.visible4;
    }
   
  }

}
