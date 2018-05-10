import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { HotelRegistrPage, EditPhotoPage, MenuPage, MapPage } from '../barrel';
import { ApiService } from '../../services/api.service';
import { PartnerService } from '../../services/partner.service';
import { Local } from '../../services/local';
import { HotelInformation } from '../../services/hotel-information';


@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})


export class HotelPage implements OnInit{
  cards:any=[]
  pageName;
  fileUrl:string='http://zont.cab:8633/api/file/'
  constructor(public navCtrl: NavController,private hotelInformation:HotelInformation, public local:Local, public navParams: NavParams, private modalCtrl: ModalController,private partnerService:PartnerService) {
    this.pageName = this.navParams.get('pageName')
    
  }
  ngOnInit(){
    this.getHotels();
  }

  private getHotels(){
    this.partnerService.getHotels().subscribe((data:any)=>{
      console.log('hotel',data);
      this.cards=data;

    })
  }


  openHotel(item) {
    let hotel = this.modalCtrl.create(HotelRegistrPage,{'id':item.id});
    hotel.present()


  }
  editPhoto(item){
    let edit=this.modalCtrl.create(EditPhotoPage,{'hotel':item,'hotelImagePath':item.hotelImagePath,'contactPersonImagePath':item.contactPersonImagePath});
    edit.present()
  }

/*  switch(item){
  
    this.navCtrl.setRoot(MenuPage,{'id':item.id})
  }*/
  
  switch(item){
   /* this.local.set('index',index)
    this.local.set('hotel'+index,item)
    this.navCtrl.setRoot(MenuPage,{'index':index})*/
    this.hotelInformation.setHotel(item)
    console.log('switch',this.hotelInformation.hotelInfo);    
    this.navCtrl.setRoot(MapPage)
  }
}



   
    
  
