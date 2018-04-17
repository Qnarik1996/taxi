import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Local } from '../../services/local';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-hotel-registr',
  templateUrl: 'hotel-registr.html',
})
export class HotelRegistrPage {
  hotelName;
  hotel;

  name;
  address;
  firstName;
  lastName;
  phone;
  email;


  constructor(public navCtrl: NavController,
              public formBuilder:FormBuilder,
              public navParams: NavParams,
              public local:Local,
              public viewCtrl:ViewController
            ) {
                this.hotelName=this.navParams.get('hotelName');
                //valid
                this.hotel = this.formBuilder.group({
                 
                  address:['',Validators.required],
                  name:['',Validators.required],
                  firstName:['',Validators.required],
                  lastName:['',Validators.required],
                  email:['',Validators.compose([Validators.required,Validators.email])],
                  phone:['',Validators.required]

    })
  }
  close(){
    this.viewCtrl.dismiss()
  }
  save(){
    console.log(this.hotel)
    this.viewCtrl.dismiss(this.hotel)
  }

}
//Validators.pattern('[(][+][0-9]{3}[)][0-9]{2}[ ][0-9]{2}[ ][0-9]{2}[ ][0-9]{2}')