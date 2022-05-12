import { Route } from './../route';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  routes:Route[] = [
    new Route (1, 'Cynthia','Nairobi','Kasarani','Githurai', new Date(2022,4,5)),
    new Route (2, 'Melody','Kisumu','Kondele','Mlimani', new Date(2022,5,5)),
    new Route (3, 'Vyonna','Nakuru','Gilgil','Bahati', new Date(2022,6,5)),
    new Route (4, 'Faith','Mombasa','Miritini','Mikindani', new Date(2022,7,5)),
  ];


  addNewRoute(route:any){
    let quoteLength = this.routes.length;
    route.id = quoteLength+1;
    route.quoteDate = new Date(route.quoteDate)
    this.routes.push(route)
  }
  constructor() {}



  ngOnInit(): void {
  }

}
