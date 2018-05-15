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
  cards:Array<any>=[]
  pageName;
  fileUrl:string='http://zont.cab:8633/api/file/'
  constructor(public navCtrl: NavController,private hotelInformation:HotelInformation, public local:Local, public navParams: NavParams, private modalCtrl: ModalController,private partnerService:PartnerService) {
    this.pageName = this.navParams.get('pageName')
    
  }
  ngOnInit(){
    this.getHotels().subscribe();
  }

  private getHotels(){
    return this.partnerService.getHotels().map((data:any)=>{
      console.log('hotel',data);
      this.cards=data;
    })
  }


  openHotel(item) {
    let hotel = this.modalCtrl.create(HotelRegistrPage,{'id':item.id});
    hotel.onWillDismiss((data)=>{
      if(data){
     
        this.getHotels().subscribe(()=>{
            let hotel=this.cards.filter((i)=>{
              return i.id===item.id;
            })[0];
            this.hotelInformation.setHotel(hotel);
        });   
      }      
    })
    hotel.present()
  }
  editPhoto(item){
    let edit=this.modalCtrl.create(EditPhotoPage,{'hotel':item,'hotelImagePath':item.hotelImagePath,'contactPersonImagePath':item.contactPersonImagePath});
    edit.onDidDismiss((data)=>{
      if(data){
        
        this.getHotels().subscribe(()=>{
            let hotel=this.cards.filter((i)=>{
              return i.id===item.id;
            })[0];
            this.hotelInformation.setHotel(hotel);        
        });
            
      }
    })
    edit.present()
  }
  
  switch(item){
    this.hotelInformation.setHotel(item);
    this.local.set('hotel',item); 
    console.log('switch',this.hotelInformation.hotelInfo);    
    this.navCtrl.setRoot(MapPage)
  }
}



   
    
  
