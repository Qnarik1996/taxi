import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

const linse=[
  [],
  [],
  [],
  []
] 


@Component({
  selector: 'page-lines',
  templateUrl: 'lines.html',
})
export class LinesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 linse = linse

}
