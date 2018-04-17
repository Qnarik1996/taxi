import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { HotelRegistrPage } from '../barrel';
import { ApiService } from '../../services/api.service';
import { PartnerService } from '../../services/partner.service';

const card = [
  { hotelName: "Holiday Inn Hotel",address:"",name:"",lastName:"",firstName:"",email:"",phone:"",bool:false},
  { hotelName: "Holiday hotel",address:"",name:"",lastName:"",firstName:"",email:"",phone:"",bool:false},
  { hotelName: "Holiday hotel", address:"",name:"",lastName:"",firstName:"",email:"",phone:"",bool:false},
  { hotelName: "Holiday Inn Hotel", address:"",name:"",lastName:"",firstName:"",email:"",phone:"",bool:false},
  { hotelName: "Holiday hotel", address:"",name:"",lastName:"",firstName:"",email:"",phone:"",bool:false},
  { hotelName: "Hotel",  address:"",name:"",lastName:"",firstName:"",email:"",phone:"",bool:false},
]

@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})


export class HotelPage implements OnInit{
 
  pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,private partnerService:PartnerService) {
    this.pageName = this.navParams.get('pageName')
    
  }
  card=card
  cards=[]
  openHotel(item,i) {
    let hotel = this.modalCtrl.create(HotelRegistrPage,{'hotelName':item.hotelName});
    hotel.onWillDismiss((data)=>{
      if(data){
       
          this.card[i].address=data.controls.address.value;
          this.card[i].name=data.controls.name.value;
          this.card[i].lastName=data.controls.lastName.value;
          this.card[i].firstName=data.controls.firstName.value,
          this.card[i].email=data.controls.email.value;
          this.card[i].phone=data.controls.phone.value;
          this.card[i].bool=true
        
       
        /*  this.cards.push({
                          address:data.controls.address.value,
                          name:data.controls.name.value,
                          lastName:data.controls.lastName.value,
                          firstName:data.controls.firstName.value,
                          email:data.controls.email.value,
                          phone:data.controls.phone.value
          })*/
        
        console.log(this.card)
        //console.log(data.controls.address.value)
      }
      
    })
    hotel.present()
  }

  ngOnInit(){
    this.getHotels();
  }

  private getHotels(){
    this.partnerService.getHotels().subscribe((data)=>{
      console.log(data);
    })
  }

}
