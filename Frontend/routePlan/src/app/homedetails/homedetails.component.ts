import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {
  title = "Manager";
  constructor(private manager:CommonService)
  { 
  this.manager.getData().subscribe(data =>{
    console.log(data)
  })
  }

  ngOnInit(): void {
  }

}
