import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-edit-photo',
  templateUrl: 'edit-photo.html',
})
export class EditPhotoPage {
  fileUrl:string='http://zont.cab:8633/api/file/'

  contactPersonImagePath;
  hotelImagePath;
  ngOnInit(){
    this.contactPersonImagePath=this.navParams.get('contactPersonImagePath');
    this.hotelImagePath=this.navParams.get('hotelImagePath');
    console.log(this.contactPersonImagePath);
    
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

  }



}
