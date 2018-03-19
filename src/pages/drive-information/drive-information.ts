import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';



declare var google;
@Component({
  selector: 'page-drive-information',
  templateUrl: 'drive-information.html',
})

export class DriveInformationPage {
 
 @ViewChild('map') mapElement:ElementRef
  map: any;
  start = 'erevan';
  end = 'gyumri';
 directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  information;
  latitudePosition;
  longitudePosition;
  bar;
  rate;
  constructor(
      public navCtrl: NavController,
              public navParams:NavParams,
              public platform: Platform,
            )
  {
   this.information=this.navParams.get('history');
   this.rate= this.information.driverRating;
   /* this.platform.ready().then(() => {
   
     this.nativeGeocoder.forwardGeocode("139651")
       .then((coordinates: NativeGeocoderForwardResult) => {
         this.bar = "The coordinates are latitude=" + coordinates.latitude + " and longitude=" + coordinates.longitude;
         console.log("The coordinates are latitude=" + coordinates.latitude + " and longitude=" + coordinates.longitude);
       })
       .catch((error: any) => console.log(error));
   
   });*/
  }

ionViewDidLoad(){
    this.initMap();
    
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 10,
      center:{lat:40.7958024,lng:43.8570917},
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
      fullscreenControl: false

  
    });

    this.directionsDisplay.setMap(this.map);
    this. calculateAndDisplayRoute();
    
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



