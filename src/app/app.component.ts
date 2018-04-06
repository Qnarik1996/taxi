import { Component,ViewChild,OnInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage, MenuPage } from '../pages/barrel';
import { ApiService } from '../services/api.service';
import { Local } from '../services/local';




@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  ngOnInit(){
   // this.apiService.getLicenceType().subscribe((data)=>{
      //console.log(data);

   // })
  }
  rootPage:any;
  @ViewChild('nav') nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private apiService:ApiService,private local:Local) {
    platform.ready().then(() => {
      if(JSON.parse(localStorage.getItem('password'))){
        this.rootPage=MenuPage
      }else{
        this.rootPage=HomePage;
      }
        
               
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}

