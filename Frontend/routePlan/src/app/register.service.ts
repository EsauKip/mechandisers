import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  // onSubmit(data:any){
  //   this.http.post("https://melo-route.herokuapp.com/api/signup/manager/", data)
  //   .subscribe((result)=>{
  //     console.warn("result",result)
  //   })
  //   console.warn(data)
  // }
  getManagerSign(){
    let url ="https://melo-route.herokuapp.com/api/signup/manager/";
    return this.http.get(url);
  }
}
