import { Injectable } from "@angular/core";
import { Http } from "@angular/http"
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
@Injectable()
export class ApiService{
    private baseUrl:string = "http://164.132.107.245:8633/api"
    constructor(private http:Http ){}
    public login(info){
        return this.http.post(this.baseUrl+"/Login",info)
            .map(data => data.json())
        }
    }
