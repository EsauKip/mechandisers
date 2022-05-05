import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'app/manager.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers:[ManagerService]
})
export class ManagerComponent implements OnInit {
  managers:any;
  constructor(private mService:ManagerService) { }

  ngOnInit(): void {
    this.AllManager();
  }
  AllManager(){
    this.mService.getAllManager().subscribe(managers =>{
      this.managers = managers;
      console.log(this.managers);
    })
  }

}
