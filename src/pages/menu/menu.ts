import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, Nav } from 'ionic-angular';

import { HotelPage, HistoryPage, MapPage,SettingPage, HomePage} from '../barrel';
import { Local } from '../../services/local';



@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',

})
export class MenuPage {
@ViewChild(Nav) nav:Nav
  constructor(public navCtrl: NavController, public navParams: NavParams,private local:Local) {
  }
activePage=MapPage
  rootPage=MapPage;
  pages:any[]=[
    {
      iconsName:"ios-pin",
      pageName:"Main",
      component:MapPage
    },
    {
      iconsName:"ios-bookmark",
      pageName:"Hotels",
      component:HotelPage
    },
    {
      iconsName:"ios-card",
      pageName:"History",
      component:HistoryPage
    },
    {
      iconsName:"md-settings",
      pageName:"Settings",
      component:SettingPage
    },

  ]

 
  addClass(page){
    
      return  this.activePage==page.component
  }
  openPage(page){
      this.activePage=page.component;
      this.nav.setRoot(page.component, {pageName:page.pageName})
    
  }
  SignOut(){
    this.local.remove('password'),
    this.local.remove('email');
    this.navCtrl.setRoot(HomePage);

  }
  
}
