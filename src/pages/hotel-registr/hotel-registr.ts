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
  fileUrl:string="http://zont.cab:8633/api/file/"
  id;
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
    this.partnerService.postHotels(this.hotelIformation).subscribe(()=>{
      this.viewCtrl.dismiss()
    })
   
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
