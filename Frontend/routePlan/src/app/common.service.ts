import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(private http:HttpClient) { }

  getData(){
    let url = 'https://melo-route.herokuapp.com/api/manager/';
    return this.http.get(url);
    
  }
}
