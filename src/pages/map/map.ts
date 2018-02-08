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


 CenterControl(controlDiv, thisComponent) {

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundImage = "url('assets/imgs/car.png')";
    controlUI.style.height= '100px';
    controlUI.style.width='100px';   
    controlUI.style.backgroundSize='cover',
    controlUI.style.backgroundPosition='center';
    controlDiv.style.marginLeft = "calc(50% - 50px)";
    controlDiv.appendChild(controlUI); 

    controlUI.addEventListener('click', function() {
     thisComponent.ok()
    });
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
  var centerControlDiv = document.createElement('div');
  var centerControl = new this.CenterControl(centerControlDiv, this);
  
  this.map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);
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
