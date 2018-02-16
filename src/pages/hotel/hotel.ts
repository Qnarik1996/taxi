import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
const cards=[  
  {name:"Naeme Name", tel:"(+374) 546 218 454"},
  {name:"Naeme Name", tel:"(+374) 546 218 454"},
  {name:"Naeme Name", tel:"(+374) 546 218 454"},
  {name:"Naeme Name", tel:"(+374) 546 218 454"},
  {name:"Naeme Name", tel:"(+374) 546 218 454"},
  {name:"Naeme Name", tel:"(+374) 546 218 454"},  
]

@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})


export class HotelPage {
pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.pageName = this.navParams.get('pageName')
  }
  cards= cards


}
