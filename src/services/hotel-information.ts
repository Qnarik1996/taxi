import { Injectable } from "@angular/core";

@Injectable()
export class HotelInformation {
    isSet: boolean = false
    hotelInfo: any;
    constructor() { }
    setHotel(value: any) {
        this.hotelInfo = value;
    }

}