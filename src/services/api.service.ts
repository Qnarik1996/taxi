import { Injectable } from "@angular/core";
//import { Http } from "@angular/http"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
@Injectable()
export class ApiService {
    private baseUrl: string = "http://164.132.107.245:8633/api"
    constructor(private http: HttpClient) { }
    public login(info) {
        return this.http.post(this.baseUrl + "/Login", info);
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
}
