import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginmech',
  templateUrl: './loginmech.component.html',
  styleUrls: ['./loginmech.component.css']
})
export class LoginmechComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  }) 
  get name(){return this.loginForm.get('name')}

  constructor() { }

  ngOnInit(): void {
  }

}
