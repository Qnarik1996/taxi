import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { HotelRegistrPage, EditPhotoPage } from '../barrel';
import { ApiService } from '../../services/api.service';
import { PartnerService } from '../../services/partner.service';


@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})


export class HotelPage implements OnInit{
  cards=[]
  pageName;
  fileUrl:string='http://zont.cab:8633/api/file/'
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,private partnerService:PartnerService) {
    this.pageName = this.navParams.get('pageName')
    
  }
  ngOnInit(){
    this.getHotels();
  }

  private getHotels(){
    this.partnerService.getHotels().subscribe((data:any)=>{
      console.log(data);
      this.cards=data;

    })
  }


  openHotel(item) {
    let hotel = this.modalCtrl.create(HotelRegistrPage,{'id':item.id});
    hotel.present()


  }
  editPhoto(item){
    let edit=this.modalCtrl.create(EditPhotoPage,{'hotelImagePath':item.hotelImagePath,'contactPersonImagePath':item.contactPersonImagePath});
    edit.present()
  }

  

}



   
    
  
