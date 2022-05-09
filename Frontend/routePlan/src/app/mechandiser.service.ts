import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MechandiserComponent } from './mechandiser/mechandiser.component';

@Injectable({
  providedIn: 'root'
})
export class MechandiserService {

  constructor(private http:HttpClient) {}
  
    getMechandiser():Observable<MechandiserComponent[]>{
      let url = 'https://melo-route.herokuapp.com/api/merchandiser/';
      return this.http.get<MechandiserComponent[]>(url);
      
    }
  }

