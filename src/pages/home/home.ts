import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../barrel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    public formBuilder: FormBuilder,
    private local: Local,
    private apiService: ApiService
  ) {
    this.registration = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
  
  login() {
    this.apiService.login({ username: this.email, password: this.password }).subscribe(
      (data:any) => {
        this.apiService.accessToken=data.accessToken;
        this.local.set('accessToken',data.accessToken);
        this.local.set('refreshToken',data.refreshToken);
      },
      (err) => {},
      () => {
        this.local.set('password',this.password);
        this.local.set('email',this.email);       
        this.navCtrl.push(MenuPage)
      }
    )
  }

  c() {
    this.apiService.consol(4)
      .then((data) => { console.log(data) })
      .catch((error) => { console.log(error) })
  }



}
/*obj = {
    next : (data) => {
      console.log("nextmer ", data)
      for(let i = 0; i < 100000000; i++){
        if(i == 100000000 - 1){
          console.log("hello")
        }
      }
    },
    error : (error) => {
      console.log("errormer ", error)
    },
    complete : () => {
      this.navCtrl.push(MenuPage)
      console.log("complete")
    }
  }*/