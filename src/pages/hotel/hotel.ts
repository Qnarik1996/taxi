import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { HotelRegistrPage } from '../barrel';
import { ApiService } from '../../services/api.service';
import { PartnerService } from '../../services/partner.service';


@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})


export class HotelPage implements OnInit{
  cards=[]
  pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,private partnerService:PartnerService) {
    this.pageName = this.navParams.get('pageName')
    
  }
  ngOnInit(){
    this.getHotels();
  }

  private getHotels(){
    this.partnerService.getHotels().subscribe((data:any)=>{
      this.cards.push(data[data.length-1]);
      console.log('data',data[data.length-1]); 

    })
  }


  openHotel(item) {
    let hotel = this.modalCtrl.create(HotelRegistrPage,{'id':item.id});
    hotel.present()


  }

  

}



   
    
  
