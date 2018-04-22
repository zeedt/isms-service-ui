import {Component, Input} from '@angular/core';
import {GlobalService} from './global.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public globalService: GlobalService){

  }

  title = 'app';
  e = "Zeed";
  @Input() public isUserLoggedIn : boolean = false;
  @Input() public cc : number  = 0;

  ngOnInit(){
    this.globalService.setLoggedInUser(localStorage.getItem("username"));
  }

}
