import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.pageName = this.navParams.get('pageName')
  }


}
