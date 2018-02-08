import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';



import {MenuPage,
        BookingPage,
        MapPage,
        NewHeader,
        MyApp,
        PaymentsPage
} from '../pages/barrel';




@NgModule({
  declarations: [
    MyApp,
    MapPage,
    MenuPage,
    BookingPage,
    NewHeader,
    PaymentsPage
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
    BookingPage,
    NewHeader,
    PaymentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
