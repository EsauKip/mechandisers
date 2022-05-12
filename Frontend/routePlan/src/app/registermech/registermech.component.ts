import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registermech',
  templateUrl: './registermech.component.html',
  styleUrls: ['./registermech.component.css']
})
export class RegistermechComponent implements OnInit {
  
  constructor() { }
  registerForm:any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name":new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]')]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null),
      "confirmpassword": new FormControl(null),
    });
  }
  submitData()
{
  console.log(this.registerForm.value);

  if (this.registerForm.valid)
      alert('Thank you for registering');  
}
get email(){return this.registerForm.get('email');}
get name(){return this.registerForm.get('name');}
get password(){return this.registerForm.get('password');}
get confirmpassword(){return this.registerForm.get('confirmpassword');}
}
