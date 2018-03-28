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
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  information;
  latitudePosition;
  longitudePosition;
  bar;
  waypts= [];
  rate;
  direction
  constructor(
      public navCtrl: NavController,
              public navParams:NavParams,
              public platform: Platform,
              
            )
  {
   this.information=this.navParams.get('history');
   this.direction=this.information.directions;
   this.rate= this.information.driverRating;
   }

ionViewDidLoad(){
    this.initMap();
    
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
      fullscreenControl: false,
      liteMode:true,
      scrollwheel: false,
      draggable:false
 
    });
    
    this.directionsDisplay  = new google.maps.DirectionsRenderer({
      map:this.map,
      markerOptions:{icon:" ",label:""}
    });
    //this.directionsDisplay.setMap(this.map);
    this. calculateAndDisplayRoute(this.directionsService);    
  }

 calculateAndDisplayRoute(directionsService) {
  for(let i=1; i< this.direction.length-1 ; i++){
    
      this.waypts.push({
        location: this.direction[i],
        stopover: true
      });
    
  }
    
    this.directionsService.route({
    
      origin: this.information.directions[0],
      destination:this.direction[this.direction.length-1],
      waypoints: this.waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
    
        new google.maps.Marker({
          icon:{
             url:"assets/imgs/circle.png",
             scaledSize:{height:15,width:15}
          },          
          position: this.information.directions[0],
          map: this.map
        });
        
        for(let i=1; i< this.direction.length-1 ; i++){
          new google.maps.Marker({
          
            icon:{
               url:"assets/imgs/circle.png",
               scaledSize:{height:15,width:15}
            },     
           
            position: this.direction[i],
            map: this.map
          });

          new google.maps.Marker({
            position: this.information.directions[this.direction.length-1],
            icon:{
              url:"assets/imgs/point.png",
              scaledSize:{height:25,width:25}
           },          
            map: this.map
          });
        }
        
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

    
  
 

  




