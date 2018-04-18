import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Local } from '../../services/local';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'page-hotel-registr',
  templateUrl: 'hotel-registr.html',
})
export class HotelRegistrPage implements OnInit{
  id;
  hotel;
  hotelIformation={};
  name;
  address;
  firstName;
  lastName;
  email;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public local:Local,
              public viewCtrl:ViewController,
              public partnerService:PartnerService
            ) {
                this.id=this.navParams.get('id');
                console.log('id',this.id)
              
  }

  close(){
    this.viewCtrl.dismiss()
  }
  save(){
    console.log(this.hotel)
    this.viewCtrl.dismiss(this.hotel)
  }

  ngOnInit(){
    this.getHotelById(this.id);
  }

  getHotelById(id){
    this.partnerService.getHotelsById(id).subscribe((data)=>{
      this.hotelIformation=data;
      console.log(data);
     
      
     
      

    })
  }

}
