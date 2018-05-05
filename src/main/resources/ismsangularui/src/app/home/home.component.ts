import { Component, OnInit } from '@angular/core';
import {GlobalService} from './../global.service'
import {AuthGuardService} from "../auth-guard.service";
import {tap} from "rxjs/operators";
import {HttpHeaders,HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor(public globalService:GlobalService, private authguard:AuthGuardService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.globalService.setLogin(true);
    console.log("json " + JSON.stringify(this.globalService.getLogin()));
    this.fetchAuthorities();

  };

  public fetchAuthorities() {
    var url = this.globalService.getUSerManagementUrl() + "/user/getDetailsByUsername/" + this.globalService.getLoggedInUser();
      this.httpClient.get(url,this.getHttpOptions()).pipe(
          tap(
              data => {
                  console.log("Data gotten is " + JSON.stringify(data));
                  data["authorities"].forEach(value => {
                      console.log("Authority is " + value.authority);
                      this.globalService.addAuthority(value.authority);

                  });
              },
              error => {
                  console.log("Error gotten is " + JSON.stringify(error));
                  console.log("Logging data from the error handler " +JSON.stringify(error))
              }
          )
      )
          .subscribe(result=>{
              console.log("Result is " + JSON.stringify(result));
              console.log("Authorities list is " + JSON.stringify(this.globalService.getAuthorities()));
          })
  }
    private  getHttpOptions () {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("isms_access_token")
            })
        };
        return httpOptions;
    }
}
