import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, Nav } from 'ionic-angular';

import { BookingPage, PaymentsPage, MapPage,HomePage  } from '../barrel';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',

})
export class MenuPage {
@ViewChild(Nav) nav:Nav
  constructor() {
  }

  rootPage=MapPage;
  pages:any[]=[
    {
      iconsName:"ios-pin",
      pageName:"Home",
      component:HomePage
    },
    {
      iconsName:"ios-bookmark",
      pageName:"Booking",
      component:BookingPage
    },
    {
      iconsName:"ios-card",
      pageName:"Payments",
      component:PaymentsPage
    },
    {
      iconsName:"ios-ionitron",
      pageName:"Contact Us"
    },

  ]
  downPages:any[]=[
    {
      pageName:"About Us"
    },
    {
      pageName:"Privacy Policy"
    }
  ]
  openPage(page){
    
      this.nav.setRoot(page.component, {pageName:page.pageName})
    
  }
  
}
