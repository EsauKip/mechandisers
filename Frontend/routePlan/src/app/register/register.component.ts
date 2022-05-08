import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data:any
  constructor(private managersignup:RegisterService) { 
    this.managersignup.getManagerSign().subscribe(data =>{
      console.log(data)
      this.data = data;
    })
  }

  ngOnInit(): void {
      
  }

}

