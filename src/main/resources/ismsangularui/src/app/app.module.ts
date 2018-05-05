import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GlobalService} from './global.service'
import {AppRouting} from './routing-module'
import {AuthGuardService} from './auth-guard.service';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy,CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/loginservices/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,CommonModule,
    AppRouting,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : 'login',
        component : LoginComponent
      },
      { path: '', loadChildren: './routing-module#AppRouting' },
      // { path: '',   redirectTo: '/app/dashboard', pathMatch: 'full' },

    ],{useHash : true})
  ],
  providers: [GlobalService,AuthGuardService,LoginService,{
    provide: LocationStrategy,
    useClass: PathLocationStrategy,
  }],
  bootstrap: [AppComponent],
  exports : [RouterModule,CommonModule]
})
export class AppModule { }
