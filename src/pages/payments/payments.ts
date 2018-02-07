import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {
pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageName=this.navParams.get('pageName')
  }

}
