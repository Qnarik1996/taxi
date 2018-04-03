import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  list=[
    {},
    {},
    {},
    {},
    {}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

}
