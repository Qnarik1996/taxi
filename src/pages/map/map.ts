import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  constructor(public navCtrl: NavController,public menuCtrl: MenuController,
    private geolocation: Geolocation) {

  }
  ionViewDidLoad(){
    this.loadMap()
  }
  
  
//////////////////////
  private icon:string = "arrow-up";
  ok(){
    this.okay = !this.okay;
    if(this.okay){
      this.icon = 'arrow-down';
    }else{
      this.icon = 'arrow-up';
    }
  }

  @ViewChild('map') mapElement:ElementRef;
  map:any;
  okay:boolean = false;
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


}
