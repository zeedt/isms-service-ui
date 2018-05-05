import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpHeaders,HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable()
export class GlobalService {

  constructor(private httpClient:HttpClient) { }

  private login = new BehaviorSubject<Boolean>(false);

  private userManagementUrl : string = "http://localhost:8011";

  private ismsServiceUrl : string = "http://localhost:7071";

  private _pageTitle = "Isms";

  private _loggedInUser;

  private userauthorities : Array<string>  = [];

  public setAuthorities(authorities:Array<string>) {
    this.userauthorities = authorities;
  }
  public addAuthority(authority:string) {
    this.userauthorities.push(authority);
  }

  public getAuthorities() {
    return this.userauthorities;
  }

  public getLogin(){
    return this.login.asObservable();
  }

  public setLogin (val : boolean) {
    this.login.next(val);
  }

  public  getpageTitle(): string {
    return this._pageTitle;
  }

  public setPageTitle(value: string) {
    this._pageTitle = value;
  }

  public getLoggedInUser() {
    return this._loggedInUser;
  }

  public setLoggedInUser(value) {
    this._loggedInUser = value;
  }

  public getUSerManagementUrl () {
    return this.userManagementUrl;
  }

  public getIsmsServiceUrl() {
    return this.ismsServiceUrl;
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



  public makeGetApiCall(url : string, requestData : object, successHandler : any, errorHandler : any) {

    this.httpClient.get(url,this.getHttpOptions()).pipe(
      tap(
        data => {
            console.log("Data gotten is " + JSON.stringify(data))
          successHandler(data);
        },
        error => {
          console.log("Error gotten is " + JSON.stringify(error))
          errorHandler(error);
        }
      )
    )
      .subscribe(result=>{
        console.log("Result is " + JSON.stringify(result));
      })


  }
  public makePostApiCall(url : string, requestData : object, successHandler : any, errorHandler : any) {

    this.httpClient.post(url,requestData,this.getHttpOptions()).pipe(
      tap(
        data => {
          successHandler(data);
        },
        error => {
          errorHandler(error);
        }
      )
    )
      .subscribe(result=>{

      })


  }



}
