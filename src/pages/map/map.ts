import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PartnerService } from '../../services/partner.service';
import 'rxjs/operators/map';
import { HubConnection } from '@aspnet/signalr'
import { HotelInformation } from '../../services/hotel-information';
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
  index:number;
  hotel:any;
  nearDrivers:any=[]
  ngOnInit(){     
    this.checkHotelInformation();
    this.hubConnection = new HubConnection("http://zont.cab:8633/hub/map")
    this.hubConnection.on('nearDriversResponse', (data) => {
      console.log('driver',data);
 
      for (let i = 0; i < this.nearDrivers.length; i++) {
        this.nearDrivers[i].setMap(null);
      }
      this.nearDrivers = []
      var icon = {
        url: "/assets/imgs/taxi.ico",
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0,0), 
        anchor: new google.maps.Point(0, 0) 
    };
    for (let i = 0; i < data.length; i++) { 
        
      this.nearDrivers[i] = new google.maps.Marker({
        position: new google.maps.LatLng(data[i].latitude,data[i].longitude),
        map: this.map,
        title: 'samplemarker',
        icon:icon,      
    });        
    }
    
  });
  this.hubConnection.start()
    .then(()=>{
      if(this.hotelService.hotelInfo){
        this.getDriversLocation();
      }       
    })
  }
  //this.hotelService.hotelInfo.latitude,this.hotelService.hotelInfo.longitude
  
  hotelInformation;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController,public navParams:NavParams,
    private geolocation: Geolocation, private partnerService:PartnerService,public hotelService:HotelInformation) {   
  }
  order = order;
  ionViewDidLoad() {
    this.loadMap()
  }

  private getDriversLocation(latitude=48.864716,longitude=2.349014){
    this.hubConnection.invoke('nearDrivers', {latitude:latitude,longitude:longitude});
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
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: true,
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
      },
      mapTypeControl: false,
      scaleControl: true,
      rotateControl: false,
      fullscreenControl: false,
      scrollWheelZoom:true,
      touchZoom:true,     
    //  draggable: false,
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
    var zoomDiv = document.createElement('div');
    var renderZoomControls = new this.ZoomControl(zoomDiv, this.map);

    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomDiv);
   this.marker = new google.maps.Marker({
      position: latLng,
      map: this.map,       
    });
 
  }
  loadMap() {
 let latLng=new google.maps.LatLng(48.864716,2.349014);
    this.initMap(latLng);
 /* this.geolocation.getCurrentPosition()
      .then((location) => {
        let latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        this.initMap(latLng);
      })
      .catch(() => {
        let latLng = new google.maps.LatLng(40.7958024, 43.8570917);
        this.initMap(latLng)
      });*/

  }

  ZoomControl(div, map) {

    // Get the control DIV. We'll attach our control UI to this DIV.
    var controlDiv = div; 
  
    // Set CSS for the controls.
    controlDiv.style.margin = '8px 18px 0px 22px';   
    controlDiv.style.cursor = 'pointer';
    controlDiv.style.border = "1px solid #9e9e9e"
    controlDiv.style.backgroundColor = "#FFFFFF";
    controlDiv.style.fontFamily = 'Open Sans';
    controlDiv.style.borderRadius = '3px';
    controlDiv.style.height = '36px';
    controlDiv.style.width = '72px';
  
    var zoomout = document.createElement('div');
    zoomout.title = 'Click to zoom out';
    zoomout.style.display = "inline-block"
    zoomout.style.borderRight = "1px solid #9e9e9e"
    zoomout.style.width = '50%';
    zoomout.style.height = '100%';
    controlDiv.appendChild(zoomout);
  
    var zoomoutText = document.createElement('div');
    zoomoutText.innerHTML = '<strong>-</strong>';
    zoomoutText.style.fontSize = '30px';

    zoomoutText.style.textAlign = 'center';
    zoomoutText.style.color = "#9e9e9e"
    zoomout.appendChild(zoomoutText);
  
    var zoomin = document.createElement('div');
    zoomin.title = 'Click to zoom in';
    zoomin.style.display = "inline-block"
    zoomin.style.width = '50%';
    zoomin.style.height = '100%';
    controlDiv.appendChild(zoomin);
  
    var zoominText = document.createElement('div');
    zoominText.innerHTML = '<strong>+</strong>';
    zoominText.style.fontSize = '30px';
    zoominText.style.textAlign = 'center';
    zoominText.style.color = "#9e9e9e"
    zoomin.appendChild(zoominText);
  
    // Setup the click event listeners for zoom-in, zoom-out:
    google.maps.event.addDomListener(zoomout, 'click', () =>{
     var currentZoomLevel = map.getZoom();
     if(currentZoomLevel != 0){
       map.setZoom(currentZoomLevel - 1);}     
    });
  
     google.maps.event.addDomListener(zoomin, 'click', () =>{
     var currentZoomLevel = map.getZoom();
     if(currentZoomLevel != 30){
       map.setZoom(currentZoomLevel + 1);}
    });
  }
  
  checkHotelInformation(){
    let hotel=JSON.parse(localStorage.getItem('hotel'));
    if(hotel){
      this.hotelService.hotelInfo=hotel;
    }
  }

}








    //////////////////////////////////
     /* addNewCard(){
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
    
  }*/