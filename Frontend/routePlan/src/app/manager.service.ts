import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor(private http:HttpClient) { }
  getAllManager(): Observable<any>{
    return this.http.get(this.baseurl + 'api/signup/manager/',{headers:this.httpHeaders});
  }
}
