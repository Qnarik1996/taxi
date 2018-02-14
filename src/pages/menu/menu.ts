import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, Nav } from 'ionic-angular';

import { BookingPage, PaymentsPage, MapPage} from '../barrel';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',

})
export class MenuPage {
@ViewChild(Nav) nav:Nav
  constructor() {
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
      component:BookingPage
    },
    {
      iconsName:"ios-card",
      pageName:"History",
      component:PaymentsPage
    },
    {
      iconsName:"md-settings",
      pageName:"Settings"
    },

  ]

 
  addClass(page){
    
      return  this.activePage==page.component
  }
  openPage(page){
      this.activePage=page.component;
      this.nav.setRoot(page.component, {pageName:page.pageName})
    
  }
  
}
