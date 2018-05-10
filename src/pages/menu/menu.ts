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


    
    console.log(this.hotel, "this.hotel")
    console.log('service-hotel-menu', this.hotel);

    this.partnerService.getPartner().subscribe((data: any) => {
      console.log('partner', data);
      this.phoneNumber=data.phone;
      this.firstName=data.firstName;
      this.lastName=data.lastName;
      this.local.set('partner', data)
    })

  }
  console() {
    console.log('console', this.hotel)
  }

  addClass(page) {
    return this.activePage == page.component
  }
  openPage(page) {
    this.activePage = page.component;
    this.nav.setRoot(page.component, { pageName: page.pageName })

  }
  SignOut() {

    this.local.remove('email');
    this.navCtrl.setRoot(HomePage);

  }

}
    /* this.id = this.navParams.get('id');    
     if (this.navParams.get('id')) {    
         this.partnerService.getHotelsById(this.id).subscribe((data) => {
         this.hotel = data;          
         this.flag=true;
         console.log(this.flag);
         
         console.log('hotelInfo', this.hotel);
       }) 
     }*/
         /*this.index = JSON.parse(localStorage.getItem('index'));
    this.hotel = JSON.parse(localStorage.getItem('hotel' + this.index));
    console.log('hotelinfo', this.hotel)  */