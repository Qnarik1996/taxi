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
  start = 'erevan';
  end = 'gyumri';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  information;
  constructor(public navCtrl: NavController,public navParams:NavParams) {
    this.information=this.navParams.get('history');
    console.log(this.information);
    
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65},
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
      fullscreenControl: false

    });

    this.directionsDisplay.setMap(this.map);
    this. calculateAndDisplayRoute()
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}



