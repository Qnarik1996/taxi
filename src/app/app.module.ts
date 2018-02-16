import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';



import {MenuPage,
        HotelPage,
        MapPage,
        NewHeader,
        MyApp,
        HistoryPage,
        LinesPage

} from '../pages/barrel';




@NgModule({
  declarations: [
    MyApp,
    MapPage,
    MenuPage,
    HotelPage,
    NewHeader,
    HistoryPage,
    LinesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    MenuPage,
    HotelPage,
    NewHeader,
    HistoryPage,
    LinesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
