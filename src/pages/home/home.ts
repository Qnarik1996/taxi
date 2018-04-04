import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../barrel';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Local } from '../../services/local';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  registration;
  email;
  password;
  bool;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder:FormBuilder,
              private local:Local,
              private apiService:ApiService
  ) {
    this.registration=this.formBuilder.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required])]
    })
  }
  
  login(){
    this.apiService.login({username:this.email,password:this.password}).subscribe(data=>{
      this.navCtrl.setRoot(MenuPage)

      
    })
  }
  


}
