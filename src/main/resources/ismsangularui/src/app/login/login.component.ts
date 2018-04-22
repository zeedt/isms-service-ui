import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import {GlobalService} from './../global.service'
import {LoginService} from '../services/loginservices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../assets/css/bootstrap.min.css', './../../assets/css/demo.min.css',
    './../../assets/css/font-awesome.min.css', './../../assets/css/lockscreen.min.css' ,'./../../assets/css/smartadmin-production-plugins.min.css' ,
    './../../assets/css/smartadmin-production.min.css','./../../assets/css/smartadmin-skins.min.css','./../../assets/css/smartadmin-rtl.min.css' ]
})
export class LoginComponent implements OnInit {

  formData;
  constructor(private globalServivce : GlobalService, public loginService:LoginService) { }
  aa=99;
  ngOnInit() {

    console.log("Global " + this.globalServivce.getLogin() );

    this.formData = new FormGroup({
      username : new FormControl("",Validators.compose([
        Validators.required, Validators.minLength(4)
      ])),
      password : new FormControl("",Validators.compose([
        Validators.required, Validators.minLength(8)
      ]))
    });
  }

  login(loginData:any) : void {
    console.log("Form data is " + JSON.stringify(loginData));
    this.loginService.authorizeUser(loginData);
  }

}
