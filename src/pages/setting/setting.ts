import { Component, Output, EventEmitter } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {ListPage, Tab2Page, Tab3Page, HomePage} from '../barrel'
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  bool : boolean;
  pageName;
  tab1: any;
  tab2: any;
  tab3: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.pageName = this.navParams.get('pageName');
  this.tab1 = ListPage;
  this.tab2 = Tab2Page;
  this.tab3 = Tab3Page;
 
  }
getBool(event){

  this.bool=event
  console.log("bool",this.bool);

  if(this.bool){    
    this.navCtrl.setRoot(HomePage)
  }
}

}
