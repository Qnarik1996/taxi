import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { Http,Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
import { Local } from "./local";
@Injectable()
export class ApiService {
    public accessToken:string='';
    private baseUrl: string = "http://164.132.107.245:8633/api"
    constructor(private httpclient: HttpClient,private http:Http) { }
    public login(info) {
        return this.httpclient.post(this.baseUrl + "/Login", info);
    }


    consol(i) {
        return new Promise((resolve, reject) => {
            if (i == 3) {
                resolve({
                    status: "ok",
                    text: "hello"
                })
            } else {
                reject({
                    status: "404",
                    text: "error"
                })
            }
        })
    }
   

    public get(url){
        this.accessToken=JSON.parse(localStorage.getItem('accessToken'));
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + this.accessToken
            })
          };
        return this.httpclient.get(this.baseUrl+url, httpOptions)
    }
    
    public post(url,options){
        this.accessToken=JSON.parse(localStorage.getItem('accessToken'));
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + this.accessToken,
            }),
        };
        return this.httpclient.post(this.baseUrl+url,options,httpOptions)
    }

    public postJS(url,options){
        this.accessToken=JSON.parse(localStorage.getItem('accessToken'));
        const httpOptions:any = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + this.accessToken,
            }),
            responseType:'text'
        };
        return this.httpclient.post(this.baseUrl+url,options,httpOptions)
    }

    public delete(url){
        this.accessToken=JSON.parse(localStorage.getItem('accessToken'));
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + this.accessToken
            })
          };
        return this.httpclient.delete(this.baseUrl+url,httpOptions)
    }
}
