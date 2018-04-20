import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class PartnerService{
    constructor(private apiService:ApiService){}

    public getHotels(){
        return this.apiService.get('/hotels');
    }  

    public getPartner(){
        return this.apiService.get('/partner');
    }

    public getHotelsById(id){
        return this.apiService.get('/hotels/'+id);
    }


    public postHotels(option){
        return this.apiService.postJS('/hotels/edit',option)
    }  
   public postPartner(option){
       return this.apiService.postJS('/partner/edit',option)
   }
}
