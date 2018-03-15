import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@Component({
  selector: 'page-drive-information',
  templateUrl: 'drive-information.html',
})
export class DriveInformationPage {
  @ViewChild('map') mapElement: ElementRef;
 
  map: any;
information;
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.information=this.navParams.get('item');
    console.log(this.information);
    
  }
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer({map: this.map});
  stepDisplay = new google.maps.InfoWindow
  start:any;
  end:any;
  ionViewDidLoad() {
    this.loadMap();
   
   
  }
  initMap(latLng) {
    let mapOption = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
      fullscreenControl: false

    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
  }
  loadMap() {
    this.geolocation.getCurrentPosition()
      .then((location) => {
        let latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        this.initMap(latLng);

      })
      .catch(() => {

        let latLng = new google.maps.LatLng(40.7958024, 43.8570917);
        this.initMap(latLng)
      });


}
getDriveTravel(){
this.directionsService.route({
  origin: this.start,
  destination:this.end,
  travelMode: 'DRIVING'
}, function(response, status) {
  // Route the directions and pass the response to a function to create
  // markers for each step.
  if (status === 'OK') {
    document.getElementById('warnings-panel').innerHTML =
        '<b>' + response.routes[0].warnings + '</b>';
    this.directionsDisplay.setDirections(response);
  
  } else {
    window.alert('Directions request failed due to ' + status);
  }
});
}


}
