import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageName=this.navParams.get('pageName')
  }

}
