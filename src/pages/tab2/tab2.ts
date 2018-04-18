import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PartnerService } from '../../services/partner.service';
import { HomePage } from '../barrel';
import { Local } from '../../services/local';


@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  @Output() a = new EventEmitter();
  bool=false;
  partner;
  firstName;
  lastName;
  email;
  password
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public partnerService:PartnerService,
              public local:Local  
            ) 
              {}
             
              
             
   ngOnInit(){
    this.partner=JSON.parse(localStorage.getItem('data'));
    
   }           
  logOut(event){
    this.bool=event;
    console.log(this.bool);   
  }
  emit(){
    this.bool=true;
    this.a.emit(this.bool);
  }
} 
  
