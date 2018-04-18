import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, Nav } from 'ionic-angular';

import { HotelPage, HistoryPage, MapPage,SettingPage, HomePage} from '../barrel';
import { Local } from '../../services/local';
import { PartnerService } from '../../services/partner.service';



@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',

})
export class MenuPage {
@ViewChild(Nav) nav:Nav
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private local:Local,
              public partnerService:PartnerService
            ) {
  }

activePage=MapPage
  rootPage=MapPage;
  name;
  phoneNumber
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
ngOnInit(){
  this.partnerService.getPartner().subscribe((data:any)=>{
    this.name=data.firstName;
    this.phoneNumber=data.phone
    console.log('data',data);
    this.local.set('data',data)
  })
}
 
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
