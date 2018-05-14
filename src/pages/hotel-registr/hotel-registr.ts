import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Local } from '../../services/local';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'page-hotel-registr',
  templateUrl: 'hotel-registr.html',
})
export class HotelRegistrPage implements OnInit {
  fileUrl: string = "http://zont.cab:8633/api/file/"
  id;
  hotelIformation:any = {};
  name;
  address;
  firstName;
  lastName;
  email;
  isDataAvailable:boolean=false;
  contactPersonImagePath;
  personImage;
 
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public local: Local,
    public viewCtrl: ViewController,
    public partnerService: PartnerService
  ) {
    this.id = this.navParams.get('id');
    console.log('id', this.id)
  }

  close() {
    this.viewCtrl.dismiss()
  }
  save() {
    this.partnerService.postHotels(null,this.personImage,
      this.hotelIformation.name,this.hotelIformation.description,this.hotelIformation.email,this.hotelIformation.phoneNumber,
      this.hotelIformation.contactPersonFirstName,this.hotelIformation.contactPersonLastName,
      this.hotelIformation.contactPersonRole,this.hotelIformation.address,this.hotelIformation.longitude,
      this.hotelIformation.latitude,this.hotelIformation.id
    ).subscribe((data)=>{
      this.viewCtrl.dismiss(true)
    })

  }

  ngOnInit() {
    this.getHotelById(this.id);
  }
  setPersonImage(){
    let styles={
      'background-image':'url('+this.contactPersonImagePath+')'
    }
    return styles
  }
  PersonImageUpload(event){
    if(event){
      let reader=new FileReader()
      this.personImage=event
      reader.onload=(e:any)=>{
        this.contactPersonImagePath=e.target.result
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  getHotelById(id) {
    this.partnerService.getHotelsById(id).subscribe((data:any) => {
      this.hotelIformation = data;
      this.contactPersonImagePath=this.fileUrl+data.contactPersonImagePath;
      console.log(data);
    })
  }

}
