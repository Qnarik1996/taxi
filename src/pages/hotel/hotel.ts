import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { HotelRegistrPage } from '../barrel';
const cards = [
  { name: "Holiday Inn Hotel", tel: "(+374) 546 218 454", photo: 'assets/imgs/girl.png' },
  { name: "Holiday hotel", tel: "(+374) 546 218 454", photo: 'assets/imgs/girl.png' },
  { name: "Holiday hotel", tel: "(+374) 546 218 454", photo: 'assets/imgs/girl.png' },
  { name: "Holiday Inn Hotel", tel: "(+374) 546 218 454", photo: 'assets/imgs/girl.png' },
  { name: "Holiday hotel", tel: "(+374) 546 218 454", photo: 'assets/imgs/girl.png' },
  { name: "Hotel", tel: "(+374) 546 218 454", photo: 'assets/imgs/girl.png' },
]

@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})


export class HotelPage {

  pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.pageName = this.navParams.get('pageName')
    
  }
  cards = cards
  openHotel(item) {
    let hotel = this.modalCtrl.create(HotelRegistrPage,{'hotelName':item.name});
    hotel.present()
  }

}
