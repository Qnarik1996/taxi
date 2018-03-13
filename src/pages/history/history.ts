import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

const history=[
  {from:"Historical Library & Museum", to:"Historical Library & Museum"},
  {from:"Historical Library & Museum", to:"Historical Library & Museum"},
  {from:"Historical Library & Museum", to:"Historical Library & Museum"}
] 

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageName=this.navParams.get('pageName')
  }
  history=history

}
