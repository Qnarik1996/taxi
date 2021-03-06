import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ChartsModule } from 'ng2-charts';
//pipe
import { PipeImage } from '../pipe';
//service
import { Local } from '../services/local'
import { ApiService } from '../services/api.service';
//components
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
  ListPage,
  ConfigsPage,
  BankAccountPage,
  HotelRegistrPage,
  AccordionWidthChart,
  EditPhotoPage


} from '../pages/barrel';
import { HttpModule } from '@angular/http';
import { PartnerService } from '../services/partner.service';
import { HotelInformation } from '../services/hotel-information';




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
    ListPage,
    ConfigsPage,
    BankAccountPage,
    HotelRegistrPage,
    AccordionWidthChart,
    EditPhotoPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    Ionic2RatingModule,
    HttpClientModule,
    ChartsModule
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
    ListPage,
    ConfigsPage,
    BankAccountPage,
    HotelRegistrPage,
    AccordionWidthChart,
    EditPhotoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Local,
    HotelInformation,
    ApiService,
    PartnerService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
