import { Component, ViewChild, NgZone, OnInit } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';

import { HotelPage, HistoryPage, MapPage, SettingPage, HomePage } from '../barrel';
import { Local } from '../../services/local';
import { PartnerService } from '../../services/partner.service';
import { load } from 'google-maps';
import { HotelInformation } from '../../services/hotel-information';



@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage implements OnInit{
  @ViewChild(Nav) nav: Nav;
  personName;
  flag: boolean = false;
  index: number;
  hotel: any;
  activePage = MapPage
  rootPage = MapPage;
  fileUrl: string = 'http://zont.cab:8633/api/file/'

  firstName;
  lastName;
  phoneNumber;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private local: Local,
    public partnerService: PartnerService,
    public hotelService: HotelInformation,
    public zone: NgZone,
   
  ) {    
  }

  pages: any[] = [
    {
      iconsName: "ios-pin",
      pageName: "Main",
      component: MapPage
    },
    {
      iconsName: "ios-bookmark",
      pageName: "Hotels",
      component: HotelPage
    },
    {
      iconsName: "ios-card",
      pageName: "History",
      component: HistoryPage
    },
    {
      iconsName: "md-settings",
      pageName: "Settings",
      component: SettingPage
    },

  ]

  
  ngOnInit() {

     this.zone.run(() => {
      this.hotel = this.hotelService.hotelInfo
     })  

    this.partnerService.getPartner().subscribe((data: any) => {
      console.log('partner', data);
      this.phoneNumber=data.phone;
      this.firstName=data.firstName;
      this.lastName=data.lastName;
      this.local.set('partner', data)
    })

  }


  /*addClass(page) {
    return this.activePage == page.component
    [class.checked-menu]="addClass(page)"
  }*/
  openPage(page) {
    this.activePage = page.component;
    this.nav.setRoot(page.component, { pageName: page.pageName })

  }
  SignOut() {
    this.local.remove('email');
    this.navCtrl.setRoot(HomePage);
  }

}
