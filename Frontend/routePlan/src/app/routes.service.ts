import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoutesComponent } from './routes/routes.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http:HttpClient) { }
  getMechandiser():Observable<RoutesComponent[]>{
    let url = 'https://melo-route.herokuapp.com/api/routes/';
    return this.http.get<RoutesComponent[]>(url);
    
  }
}
