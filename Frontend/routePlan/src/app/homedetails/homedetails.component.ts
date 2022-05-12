import { Route } from './../route';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {
  newRoute = new Route (0,'', '','','',  new Date());
  @Output() addRoute = new EventEmitter<Route>();

  submitRoute(){
    this.addRoute.emit(this.newRoute);
  }
  constructor(){ }

  ngOnInit(): void {
  }

}
