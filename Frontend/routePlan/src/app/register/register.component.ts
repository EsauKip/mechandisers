import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data:any
  postId:any
  constructor(private managersignup:RegisterService, private http:HttpClient ) { 
    
    this.managersignup.getManagerSign().subscribe(data =>{
      console.log(data)
      this.data = data;
    })
  }
  // onSubmit(data:any){
  //   this.http.post("https://melo-route.herokuapp.com/api/signup/manager/", data)
  //   .subscribe((result)=>{
  //     console.warn("result",result)
  //   })
  //   console.warn(data)
  // }

  ngOnInit(): void {
  }
  }

