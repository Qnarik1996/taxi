import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl: MenuController,
    private geolocation: Geolocation) {

  }
  ionViewDidLoad(){
    this.loadMap()
  }

  @ViewChild('map') mapElement:ElementRef;
  mapInitialised: boolean = false;
  map:any;
  enabled:boolean=false;
  initMap(latLng){
    let  mapOption={
      center:latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      zoomControl:false,
      mapTypeControl:false,
      scaleControl: false,
      rotateControl: false,
      fullscreenControl: false
      }
  this.map=new google.maps.Map(this.mapElement.nativeElement,mapOption);
  
  }
  loadMap(){
    this.geolocation.getCurrentPosition()
    .then((location) => {
      let latLng=new google.maps.LatLng(location.coords.latitude,location.coords.longitude);
      this.initMap(latLng);
      console.log(location.coords.latitude,location.coords.longitude)
      
    })
    .catch(() => {
      
      let latLng=new google.maps.LatLng(40.7958024,43.8570917);
      this.initMap(latLng)
    });
  


  }
  c(){
    this.menuCtrl.open()
  }

}
