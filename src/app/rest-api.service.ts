import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'https://reqres.in/api/products/';

  constructor(private http: HttpClient) { }

  getApiData(){
    return this.http.get(this.apiUrl);
  }

  getApiDataById(id: any){
    return this.http.get(this.apiUrl+id);
  }
}
