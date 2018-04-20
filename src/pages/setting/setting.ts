import { Component, Output, EventEmitter } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {ListPage, ConfigsPage, BankAccountPage, HomePage} from '../barrel'
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
 
  pageName;
  tab1: any;
  tab2: any;
  tab3: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.pageName = this.navParams.get('pageName');
  this.tab1 = ListPage;
  this.tab2 = ConfigsPage;
  this.tab3 = BankAccountPage;
 
  }


}
