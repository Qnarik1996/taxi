import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Local } from './local';

@Injectable()
export class PartnerService{
    constructor(private apiService:ApiService, private httpClient:HttpClient,private local:Local){}
    getRole(){
        return this.apiService.get('/Login/getrole');
    }
    getAccessToken(){
        let refreshToken =JSON.parse(localStorage.getItem('refreshToken'));
        return this.apiService.post('/Login/getaccesstoken?refreshToken=' + refreshToken, {});
    }
    checkAccessToken(){
        let role = JSON.parse(localStorage.getItem('role'));
        //return this.apiService.get('/login/' + role);
        let accessToken=JSON.parse(localStorage.getItem('accessToken'));
        const httpOptions:any = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + accessToken
            }),
            responseType:'text',
            observe: 'response'
          };
        return this.httpClient.get('http://164.132.107.245:8633/api/Login/' + role , httpOptions)
    }
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
