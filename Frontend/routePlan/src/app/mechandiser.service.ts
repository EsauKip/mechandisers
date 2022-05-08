import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MechandiserService {

  constructor(private http:HttpClient) {}
  
    getMechandiser(){
      let url = 'https://melo-route.herokuapp.com/api/merchandiser/';
      return this.http.get(url);
      
    }
  }

