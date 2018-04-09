import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  open: boolean = false;
  private icon: string = "arrow-down"
  list = [
    {
      open:false,
      icon: 'arrow-down'
    },
    {
      open:false,
      icon: 'arrow-down'
    },
    {
      open:false,
      icon: 'arrow-down'
    },
    {
      open:false,
      icon: 'arrow-down'
    },
    {
      open:false,
      icon: 'arrow-down'
    }
  ];

  

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
openCards(item){
  item.open=!item.open;
  if(!item.open){
    item.icon = 'arrow-down';
      
    } else {
      item.icon = 'arrow-up';
    }
  }

  openList() {
    
    this.open = !this.open;
    if (!this.open) {
      this.icon = 'arrow-down';
      
    } else {
      this.icon = 'arrow-up';
    }
  }
}


