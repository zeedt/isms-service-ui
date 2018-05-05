import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.globalService.setPageTitle("View Students");
    console.log("Authorities are " + JSON.stringify(this.globalService.getAuthorities()))
  }

}
