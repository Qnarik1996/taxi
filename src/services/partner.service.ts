import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Local } from './local';
import { RequestOptions, Headers, Http } from '@angular/http';

@Injectable()
export class PartnerService {
    private baseUrl: string = "http://164.132.107.245:8633/api"
    constructor(private apiService: ApiService, private httpClient: HttpClient, private local: Local,
        private http: Http
    ) { }
    getRole() {
        return this.apiService.get('/Login/getrole');
    }
    getAccessToken() {
        let refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
        return this.apiService.post('/Login/getaccesstoken?refreshToken=' + refreshToken, {});
    }
    checkAccessToken() {
        let role = JSON.parse(localStorage.getItem('role'));
        let accessToken = JSON.parse(localStorage.getItem('accessToken'));
        const httpOptions: any = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }),
            responseType: 'text',
            observe: 'response'
        };
        return this.httpClient.get('http://164.132.107.245:8633/api/Login/' + role, httpOptions)
    }
    public getHotels() {
        return this.apiService.get('/hotels');
    }

    public getPartner() {
        return this.apiService.get('/partner');
    }

    public getHotelsById(id) {
        return this.apiService.get('/hotels/' + id);
    }

    public postHotels(hotelImage, personImage, hotelname, description, email, phonenumber, firstname, lastname, role, address, lng, lat, id) {

        let headers: Headers = new Headers();
        let formData: FormData = new FormData();
        if (hotelImage && hotelImage.target) {
            let fileList: FileList = hotelImage.target.files;
            if (fileList.length > 0) {
                let file: File = fileList[0];
                formData.append('hotelImage', file, file.name);
            }
        }
        if (personImage && personImage.target) {
            let fileList: FileList = personImage.target.files;
            if (fileList.length > 0) {
                let file: File = fileList[0];
                formData.append('contactPersonImage', file, file.name);
            }
        }
        formData.append('name', hotelname);
        formData.append('id', id);
        formData.append('description', description);
        formData.append('email', email);
        formData.append('phoneNumber', phonenumber);
        formData.append('contactPersonFirstName', firstname);
        formData.append('contactPersonLastName', lastname);
        formData.append('contactPersonRole', role);
        formData.append('address', address);
        formData.append('longitude', lng);
        formData.append('latitude', lat);
        let accessToken = JSON.parse(localStorage.getItem('accessToken'));
        headers.append('Authorization', 'Bearer ' + accessToken)
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + '/hotels/edit', formData, options)

    }
    public postPartner(option) {
        return this.apiService.postJS('/partner/edit', option)
    }
}
