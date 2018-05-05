import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.globalService.setPageTitle("Add Students");
    console.log("Authorities are " + JSON.stringify(this.globalService.getAuthorities()))
  }

}
