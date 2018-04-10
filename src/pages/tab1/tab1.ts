import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';


@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  @ViewChild(Content) content: Content;

  private icon: string = "arrow-down"
  list = [
    {
      date:"April 03 - May 03 ",
      price:"200$",
      open:false,
      icon: 'arrow-down',
      data1:[500, 300, 150, 500, 200, 130, 150, 500, 300, 150, 500, 200, 130, 150, 500],
      data2: [350, 400, 130, 130, 350, 125, 200, 350, 400, 130, 130, 350, 125, 200, 500]
    },
    {
      date:"May 03 - June 03 ",
      price:"150$",
      open:false,
      icon: 'arrow-down',
      data1:[200, 300, 150, 500, 200, 130, 150, 500, 300, 150, 500, 200, 130, 150, 500],
      data2: [350, 400, 130, 130, 350, 125, 200, 350, 400, 130, 130, 350, 125, 200, 300]
    },
    {
      date:"April 03 - May 01 ",
      price:"200$",
      open:false,
      icon: 'arrow-down',
      data1:[500, 300, 150, 500, 200, 130, 150, 500, 300, 150, 500, 200, 130, 150, 500],
      data2: [350, 400, 130, 130, 350, 125, 200, 350, 400, 130, 130, 350, 125, 200, 300]
    },
    {
      date:"April 01 - May 03 ",
      price:"300$",
      open:false,
      icon: 'arrow-down',
      data1:[500, 300, 150, 500, 200, 130, 150, 500, 300, 150, 500, 200, 130, 150, 500],
      data2: [350, 400, 130, 130, 350, 125, 200, 350, 400, 130, 130, 350, 125, 200, 300]
    },
    {
      date:"April 02 - May 03 ",
      price:"100$",
      open:false,
      icon: 'arrow-down',
      data1:[500, 300, 150, 500, 200, 130, 150, 500, 300, 150, 500, 200, 130, 150, 500],
      data2: [350, 400, 130, 130, 350, 125, 200, 350, 400, 130, 130, 350, 125, 200, 300]
    }
  ];

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
   }
openCards(item,last){
  item.open=!item.open;

  if(!item.open){
    item.icon = 'arrow-down';
      
    } else {
      item.icon = 'arrow-up';
    }
    if(last){      
      setTimeout(()=>{
        this.content.scrollToBottom(200);
      }, 200)
      
    }
    
  }

  /*openList() {
    
    this.open = !this.open;
    if (!this.open) {
      this.icon = 'arrow-down';
      
    } else {
      this.icon = 'arrow-up';
    }
  }*/
}


