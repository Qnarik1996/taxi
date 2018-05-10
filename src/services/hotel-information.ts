import { Injectable } from "@angular/core";

@Injectable()
export class HotelInformation{
    
    hotelInfo:any;
    constructor(){}
    setHotel(value:any){
        this.hotelInfo=value
    }

}