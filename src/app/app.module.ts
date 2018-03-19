import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';



import {MenuPage,
        HotelPage,
        MapPage,
        NewHeader,
        MyApp,
        HistoryPage,
        LinesPage,
        SettingPage,
        DriveInformationPage

} from '../pages/barrel';




@NgModule({
  declarations: [
    MyApp,
    MapPage,
    MenuPage,
    HotelPage,
    NewHeader,
    HistoryPage,
    LinesPage,
    SettingPage,
    DriveInformationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    MenuPage,
    HotelPage,
    NewHeader,
    HistoryPage,
    LinesPage,
    SettingPage,
    DriveInformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
