import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { DriveInformationPage } from '../barrel';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
    this.pageName=this.navParams.get('pageName')
  }
  history=history;
  openInformation(item){
    let modal=this.modalCtrl.create(DriveInformationPage,{'item':item});
    modal.present()
  }

}
