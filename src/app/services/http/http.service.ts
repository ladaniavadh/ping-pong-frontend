import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,

  ) { }
  baseURL = 'http://35.207.233.246:8082/api/v1/game/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  });

  postHttp(url: any, reqBody: any) {
    console.log(this.baseURL);
    console.log(url);
    console.log(reqBody);
    
    return this.http
      .post<any>(this.baseURL + url, reqBody, {
        headers: this.headers,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getHttp(url: any) {
    return this.http
      .get<any>(this.baseURL + url, {
        headers: this.headers,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
