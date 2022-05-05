import { Component } from '@angular/core';
import { ManagerService } from './manager.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routePlan';
  msg:any;
  constructor(private mService: ManagerService){

  }
  ngOnInit():void{
    this.showMessage();
  }
  showMessage(){
    this.mService.getAllManager().subscribe(data=>{
      this.msg = data,
      console.log(this.msg);
    })
  }
}
