import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {Tab1Page, Tab2Page, Tab3Page} from '../barrel'
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
  this.tab1 = Tab1Page;
  this.tab2 = Tab2Page;
  this.tab3 = Tab3Page;
  }


}
