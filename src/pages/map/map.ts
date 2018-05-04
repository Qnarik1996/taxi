import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PartnerService } from '../../services/partner.service';
import 'rxjs/operators/map';
import { HubConnection } from '@aspnet/signalr'
declare var google;
const order: any[] = [

]
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage implements OnInit {
  switchedHotelInfo:any;
  flag:boolean=false;
  hubConnection:HubConnection;
  count=0;
  marker;
  ngOnInit(){
    this.hubConnection = new HubConnection("http://zont.cab:8633/hub/map")
    this.hubConnection.on('nearDriversResponse', data => {
      console.log(data);
      this.flag=true;
  });
  this.hubConnection.start()
    .then(()=>{
        if(this.flag){
          this.getDriversLocation();
        }
    })
  }
  
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
      this.icon = '';
    }
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
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      rotateControl: false,
      fullscreenControl: false,
      scrollWheelZoom:true,
      touchZoom:true,     
      draggable: false,
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
    this.marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
    
    
    });
 
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

  private getDriversLocation(latitude=48.864716,longitude=2.349014){
    this.hubConnection.invoke('nearDrivers', {latitude:latitude,longitude:longitude});
  }

  


}
/*this.hubConnection.on("nearDriversResponse",(msg)=>{
      console.log(msg);
      
      for (let i = 0; i < this.nearDrivers.length; i++) {
        this.nearDrivers[i].setMap(null);
      }
      this.nearDrivers = []
      var icon = {
        url: "/assets/map/taxi.ico",
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0,0), 
        anchor: new google.maps.Point(0, 0) 
    };
      for (let i = 0; i < msg.length; i++) { 
        
        this.nearDrivers[i] = new google.maps.Marker({
          position: new google.maps.LatLng(msg[i].latitude,msg[i].longitude),
          map: this.map,
          title: 'samplemarker',
          icon:icon,
        
      });        
      }
    })*/