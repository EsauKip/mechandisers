import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mech',
  templateUrl: './mech.component.html',
  styleUrls: ['./mech.component.css']
})
export class MechComponent implements OnInit {
  data:any;
  constructor( private http:HttpClient) { }
  
  ngOnInit(): void {
  }

}
