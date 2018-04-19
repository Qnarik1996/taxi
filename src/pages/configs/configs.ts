import { Component, Input } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { PartnerService } from '../../services/partner.service';
import { HomePage } from '../barrel';
import { Local } from '../../services/local';


@Component({
  selector: 'page-configs',
  templateUrl: 'configs.html',
})
export class ConfigsPage {
 
  partner;
  firstName;
  lastName;
  email;
  password
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public partnerService:PartnerService,
              public local:Local,
              public app:App 
            ) 
             {}                                   
   ngOnInit(){
    this.partner=JSON.parse(localStorage.getItem('data'));    
   }  
   save(){
    this.partnerService.postPartner(this.partner).subscribe((data)=>{
      console.log(data);
      
    })
   }         

  logOut(){
    this.local.remove('password'),
    this.local.remove('email')     
    this.app.getRootNav().setRoot(HomePage);
   }

} 
  
