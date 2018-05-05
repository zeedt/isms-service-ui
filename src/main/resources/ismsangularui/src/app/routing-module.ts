import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './auth-guard.service';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FirstloadComponent} from './firstload/firstload.component';
import {PerformanceComponent} from './performance/performance.component';
import {GlobalService} from "./global.service";
import {ViewStudentComponent} from "./view-student/view-student.component";
import {AddStudentComponent} from "./add-student/add-student.component";
import {ViewRegDetailsComponent} from "./view-reg-details/view-reg-details.component";
import {AddRegDetailsComponent} from "./add-reg-details/add-reg-details.component";

import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
const route : Routes = [
  {
    path : '',
    component : HomeComponent,
    canActivate : [AuthGuardService],
    children : [
      {
        path : "performance",
        component : PerformanceComponent
      },
      {
        path : "dashboard",
        component : DashboardComponent
      },

      // Student paths
      {
        path : "students/addStudents",
        component : AddStudentComponent
      },
      {
        path : "students/viewStudents",
        component : ViewStudentComponent
      },

      // RegDetails paths
      {
        path : "regDetails/addRegDetails",
        component : AddRegDetailsComponent
      },
      {
        path : "regDetails/viewRegDetails",
        component : ViewRegDetailsComponent
      },
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(route),ReactiveFormsModule,CommonModule
  ],
  declarations : [
    HomeComponent,FirstloadComponent,DashboardComponent,PerformanceComponent,
    ViewStudentComponent,
    AddStudentComponent,
    AddRegDetailsComponent,
    ViewRegDetailsComponent
  ],
  providers : [
      GlobalService
  ],
})

export class AppRouting {};
