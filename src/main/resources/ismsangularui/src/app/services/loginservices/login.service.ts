import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  private authorizationUrl = "http://127.0.0.1:8011/oauth/token";

  constructor(private httpClient:HttpClient, private router:Router) { }

  public authorizeUser (loginDetails:any){
    var encodedString = btoa("isms-service:secret");
    var url = this.authorizationUrl + "?grant_type=password&username=" + loginDetails.username + "&password=" + loginDetails.password;
    console.log("Converted " + encodedString); // Outputs: "SGVsbG8gV29ybGQh"
    const httpHeaders = {
      headers : new HttpHeaders({
        "Content-Type" : "application/json",
        "Authorization" : "Basic " + encodedString
      })
    };

    this.httpClient.post(url,loginDetails,httpHeaders)
      .pipe(
        tap(
          data => {
            console.log("Data is " + JSON.stringify(data));
            this.router.navigate(["/"]);
          } ,
          error => {
            console.log("Error is " + JSON.stringify(error))
            }
        )
      )
      .subscribe(a=>{console.log("Result is " + JSON.stringify(a))});
  }

}
