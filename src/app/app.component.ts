import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage, MenuPage } from '../pages/barrel';
import { ApiService } from '../services/api.service';
import { Local } from '../services/local';
import { PartnerService } from '../services/partner.service';




@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  ngOnInit() {
    // this.apiService.getLicenceType().subscribe((data)=>{
    //console.log(data);

    // })
  }
  rootPage: any;
  @ViewChild('nav') nav;
  constructor(private partnerService: PartnerService, 
              platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen, 
              private apiService: ApiService,
              private local: Local) {
    platform.ready().then(() => {
    /*  if (JSON.parse(localStorage.getItem('password'))) {
        this.rootPage = MenuPage
      } else {
        this.rootPage = HomePage;
      }
*/

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    console.log('hello')
    this.partnerService.checkAccessToken().subscribe(
      (data: any) => {
        console.log(data)
        if (data.status == 200) {
          this.rootPage = MenuPage
          console.log(data)
        }
      },
      (error) => {
        if (error.status == 401) {
          this.partnerService.getAccessToken().subscribe(
            (data: any) => {
              console.log(data)
              localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
              localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
              this.partnerService.getRole().subscribe(
                (data: any) => {
                  console.log(data)
                  localStorage.setItem('role', JSON.stringify(data.role));
                  this.rootPage = MenuPage                  
                },
                (error) => {
                  this.rootPage = HomePage;
                  console.log(error)
                }
              )
            },
            (error) => {
              this.rootPage = HomePage;
              console.log(error)
            }
          )
        }
        this.rootPage = HomePage;
       console.log(error)
      }
    )

  }

}

