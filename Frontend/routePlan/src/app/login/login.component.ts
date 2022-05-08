import { CommonService } from './../common.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  users:any = [];
  constructor(private fb:FormBuilder, private router:Router, private commonserve:CommonService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required]
    });
    this.commonserve.getData().subscribe((data:any)=>{
      console.log(data);
    })
  }
loginSubmit(data:any){
  if (data.name){
    this.users.forEach((item:any)=>{
      if(item.name === data.name && item.password === data.password ){
        console.log("User is valid");
      }
      else{
        console.log("user is invalid");
      }
    })
  }

}
getToSignup(){
    this.router.navigate(['register'])
}
}
