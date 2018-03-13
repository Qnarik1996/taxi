import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.pageName = this.navParams.get('pageName')
  }


}
