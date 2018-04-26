import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PartnerService } from '../../services/partner.service';
import 'rxjs/operators/map';
declare var google;
const order: any[] = [

]
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {
count=0;
marker;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController,
    private geolocation: Geolocation, private partnerService:PartnerService) {

  }
  order = order;


  ionViewDidLoad() {
    this.loadMap()
  }
  addNewCard(){
    this.count++;
    if(this.order.length==3){
      this.order[0].delete=true;
      let interval=setTimeout(()=>{ 
        this.order.splice(0,1);
        this.order.push({ text: "Historical Library & Museum"+this.count.toString(), delete:false});
   },10);
    }
    else{
      this.order.push({ text: "Historical Library & Museum"+this.count.toString(), delete:false});
    }
    
  }

  //////////////////////
  private icon: string = "arrow-up";

  ok() {
    this.okay = !this.okay;
    if (this.okay) {
      this.icon = 'arrow-down';
    } else {
      this.icon = 'arrow-up';
    }
  }


 CenterControl(controlDiv, thisComponent) {
 /* var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.textAlign = 'center';

  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Պատվիրել';
  controlUI.appendChild(controlText);*/
     var controlUI = document.createElement('div');
   // controlUI.style.backgroundImage = "url('assets/imgs/car.png')";
    controlUI.style.height = '100px';
    controlUI.style.width = '100px';
    controlUI.style.backgroundSize = 'cover',
      controlUI.style.backgroundPosition = 'center';
      controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlUI.style.display="none";
    //controlDiv.style.marginLeft = "calc(50% - 50px)";
    controlDiv.appendChild(controlUI);
    
    controlUI.addEventListener('click', function () {
      thisComponent.ok()
    });
  }


  @ViewChild('map') mapElement: ElementRef;
  map: any;
  okay: boolean = false;
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
      fullscreenControl: false,
      //draggable: false,
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
    this.marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
    
    });
    var centerControlDiv = document.createElement('div');
    var centerControl = new this.CenterControl(centerControlDiv, this);
    this.map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv);
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


}
