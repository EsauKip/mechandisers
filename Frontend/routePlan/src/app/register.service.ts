import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  getManagerSign(){
    let url ="https://melo-route.herokuapp.com/api/signup/manager/";
    return this.http.get(url);
  }
}
