import { Component, OnInit } from '@angular/core';
import {GlobalService} from './../global.service'
import {AuthGuardService} from "../auth-guard.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor(private globalService:GlobalService, private authguard:AuthGuardService) { }

  private authorities : Array<string> = [];

  ngOnInit() {
    this.globalService.setLogin(true);
    console.log("json " + JSON.stringify(this.globalService.getLogin()));
    this.fetchAuthorities();
    console.log("Authorities are " + JSON.stringify(this.authorities));

    // setInter

  };


  public fetchAuthorities() {
    var url = this.globalService.getUSerManagementUrl() + "/user/getDetailsByUsername/" + this.globalService.getLoggedInUser();
    this.globalService.makeGetApiCall(url,null,function (data) {
      data.authorities.forEach(value => {
         this.addAuthority(data.authority);
      });
    },function (error) {
      console.log("Logging data from the error handler " +JSON.stringify(error))
    });

  }

  public unknown(){
      
  }


}
