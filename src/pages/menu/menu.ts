import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',

})
export class MenuPage {

  constructor() {
  }

  rootPage=HomePage;
  pages:any[]=[
    {
      iconsName:"ios-pin",
      text:"Home"
    },
    {
      iconsName:"ios-bookmark",
      text:"Booking"
    },
    {
      iconsName:"",
      text:"Payments"
    },
    {
      iconsName:"",
      text:"Contact Us"
    },

  ]
  
}
