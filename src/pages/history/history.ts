import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { DriveInformationPage } from '../barrel';

const history=[
  {
    directions:[
      {
        label:"Gyumry",
        lat:40.795301,
        lng:43.846812
      },
 
      {
        label:"Spitak",
        lat:40.8265018,
        lng:44.2438101
      },
      
      {
        label:"Erevan",
        lat:40.2036917,
        lng:44.4873235
      },
      {
        label:"Tsaghkadzor",
        lat:40.5325869,
        lng:44.7080897
      }

    ],
    userName:'Vannesa Donavan',
    driverName:'Noarn Chomsky',
    driverRating:3,
    date:'12.03.2018',
    price:'200$',
    speed:'30 Km',
    photoUser:'assets/imgs/girl.png',
    driverfoto:'assets/imgs/driver.jpg'
},

  {
    directions:[
      {
        label:"Historical Library & Museum",
        lat:40.795301,
        lng:43.846812
      },
 
      {
        label:"Historical Library & Museum Fnal",
        lat:40.179681,
        lng:44.506264
      }
    ],
    from:"Historical Library & Museum", 
    to:"Historical Library & Museum",
    userName:'Vannesa Donavan',
    driverName:'Noarn Chomsky',
    date:'30.03.2018',
    price:'100$',
    speed:'40 Km',
    photoUser:'assets/imgs/girl.png',
    driverRating:2,
    driverfoto:'assets/imgs/driver.jpg'
  },
  {
    directions:[
      {
        label:"Historical Library & Museum",
        lat:40.795301,
        lng:43.846812
      },
 
      {
        label:"Historical Library & Museum Fnal",
        lat:40.179681,
        lng:44.506264
      }
    ],
    from:"Historical Library & Museum", 
    to:"Historical Library & Museum",
    userName:'Vannesa Donavan',
    driverName:'Noarn Chomsky',
    date:'10.01.2018',
    price:'500$',
    speed:'50 Km',
    photoUser:'assets/imgs/girl.png',
    driverRating:4,
    driverfoto:'assets/imgs/driver.jpg'
  }
] 

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
pageName;
history=history;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
    this.pageName=this.navParams.get('pageName')
  }
  
  openInformation(item){
    let modal=this.modalCtrl.create(DriveInformationPage,{'history':item});

    modal.present()
  }

}
