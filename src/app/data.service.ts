import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient) { }

  uploadData(body: any) {
    // console.log(body);
    return this.http.post(this.url + 'submit', body, {
      observe: 'body'
    });
  }

  save(body: any){
    return this.http.post(this.url + 'save', body, {
      observe: 'body'
    });
  }
}
