import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { PipeImage } from '../pipe'
import { Local } from '../services/local'

import {
  HomePage,
  MenuPage,
  HotelPage,
  MapPage,
  NewHeader,
  MyApp,
  HistoryPage,
  LinesPage,
  SettingPage,
  DriveInformationPage,
  Tab1Page,
  Tab2Page,
  Tab3Page


} from '../pages/barrel';
import { ApiService } from '../services/api.service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    MenuPage,
    HotelPage,
    NewHeader,
    HistoryPage,
    LinesPage,
    SettingPage,
    DriveInformationPage,
    PipeImage,
    Tab1Page,
    Tab2Page,
    Tab3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    Ionic2RatingModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    MenuPage,
    HotelPage,
    NewHeader,
    HistoryPage,
    LinesPage,
    SettingPage,
    DriveInformationPage,
    Tab1Page,
    Tab2Page,
    Tab3Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Local,
    ApiService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
