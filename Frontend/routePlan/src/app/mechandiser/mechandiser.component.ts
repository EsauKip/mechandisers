import { Component, OnInit } from '@angular/core';
import { MechandiserService } from '../mechandiser.service';

@Component({
  selector: 'app-mechandiser',
  templateUrl: './mechandiser.component.html',
  styleUrls: ['./mechandiser.component.css']
})
export class MechandiserComponent implements OnInit {
  title = "Mechandiser";
  data:any
  constructor(private mechandiser:MechandiserService) {
    this.mechandiser.getMechandiser().subscribe(data =>{
      console.log(data);
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

}
