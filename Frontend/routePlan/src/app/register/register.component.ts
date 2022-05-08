import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register:any = FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
      this.register = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    });
  }
registerSubmit(data:any){
console.log(data);
}
getToLogin(){
  this.router.navigate(['login'])
}


}
