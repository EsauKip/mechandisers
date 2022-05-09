import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  data:any;
  constructor(private routes:RoutesService) {
    this.routes.getMechandiser().subscribe(data =>{
      console.log(data);
      this.data = data;
    })
  }



  ngOnInit(): void {
  }

}
