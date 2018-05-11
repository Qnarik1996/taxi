import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { PartnerService } from '../../services/partner.service';


@Component({
  selector: 'page-edit-photo',
  templateUrl: 'edit-photo.html',
})
export class EditPhotoPage {
  hotelImage:Event;
  personImage:Event;
  fileUrl:string='http://zont.cab:8633/api/file/'

  contactPersonImagePath;
  hotelImagePath;
  hotel;
  ngOnInit(){
    this.contactPersonImagePath='http://zont.cab:8633/api/file/'+this.navParams.get('contactPersonImagePath');
    this.hotelImagePath='http://zont.cab:8633/api/file/'+this.navParams.get('hotelImagePath');
    this.hotel=this.navParams.get('hotel')
    
  }
  constructor(public navCtrl: NavController,public viewCtrl:ViewController, public navParams: NavParams,private partnerService:PartnerService) { }

  private HotelImageUpload(event) {
    if (event) {
        let reader = new FileReader()
        this.hotelImage = event;
        reader.onload = (e: any) => {
            this.hotelImagePath = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}

  private PersonImageUpload(event){
    if (event) {
      let reader = new FileReader()
      this.personImage = event;
      reader.onload = (e: any) => {
          this.contactPersonImagePath = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      
  }
  }

  setHotelImage(){
      let styles={
        'background-image':'url('+this.hotelImagePath+')'
      };
      return styles;
  }

  setPersonImage(){
    let styles={
      'background-image':'url('+this.contactPersonImagePath+')'
    };
    return styles;
  }

  updateImages(){
    this.partnerService.postHotels(this.hotelImage,this.personImage,
      this.hotel.name,this.hotel.description,this.hotel.email,this.hotel.phoneNumber,
      this.hotel.contactPersonFirstName,this.hotel.contactPersonLastName,
      this.hotel.contactPersonRole,this.hotel.address,this.hotel.longitude,
      this.hotel.latitude,this.hotel.id
    ).subscribe((data)=>{
      this.viewCtrl.dismiss()
    })
  }
}
